import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

import configureStore from 'redux-mock-store';
import ThunkMiddleware from 'redux-thunk';
import nock from 'nock';

const mockStore = configureStore([ThunkMiddleware])

it('should create an action to search robots', () => {
    const text = 'wooo'
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots api', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions()

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
})

it('handles requesting robots api success', () => {
    const store = mockStore()
    nock('https://jsonplaceholder.typicode.com')
        .defaultReplyHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        })
        .get('/users')
        .reply(200, [{
            id: 1,
            name: 'jon',
            email: 'jon@gmail.com'
        }]);

    return store.dispatch(actions.requestRobots()).then(() => {
        const action = store.getActions()

        const expectedAction = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'jon',
                email: 'jon@gmail.com'
            }]
        }
        expect(action[1]).toEqual(expectedAction)
    })
})

// it('handles requesting robots api failed', () => {
//     const store = mockStore()
//     nock('https://jsonplaceholder.typicode.com')
//         .defaultReplyHeaders({
//             'Access-Control-Allow-Origin': '*',
//             'Content-type': 'application/json'
//         })
//         .get('/users')
//         .replyWithError('Error')

//     return store.dispatch(actions.requestRobots()).then(() => {
//         const action = store.getActions()

//         const expectedAction = {
//             type: REQUEST_ROBOTS_FAILED,
//             payload: 'Error'
//         }
//         expect(action[1]).toEqual(expectedAction)
//     })
// })