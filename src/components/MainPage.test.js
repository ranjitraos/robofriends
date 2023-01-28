import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './MainPage';

describe('App component tests', () => {
    let wrapper;
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    }
    beforeEach(() => {
        wrapper = renderer
            .create(<MainPage {...mockProps} />)
            .toJSON();
    })

    it('renders App component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', async () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'jon',
                email: 'jon@gmail.com'
            }],
            searchField: "j",
            isPending: false
        }
        const { container } = render(<MainPage {...mockProps} />)
        const { container: container2 } = render(<MainPage {...mockProps2} />)
        expect(container.getElementsByClassName('card').length).toEqual(0)
        expect(container2.getElementsByClassName('card').length).toEqual(1)
    })

    it('filters robots correctly 2', async () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'jon',
                email: 'jon@gmail.com'
            }],
            searchField: "a",
            isPending: false
        }
        const { container } = render(<MainPage {...mockProps3} />)
        expect(container.getElementsByClassName('card').length).toEqual(0)
    })
})