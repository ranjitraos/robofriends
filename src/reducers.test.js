import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {}))
            .toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCH_FIELD event', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {}))
            .toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'jon',
                email: 'jon@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: 1,
                name: 'jon',
                email: 'jon@gmail.com'
            }],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'Error'
        })
    })
})