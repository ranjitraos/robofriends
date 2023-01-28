import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterButton from './CounterButton';

describe('CounterButton tests', () => {
    it('renders CounterButton component correctly', () => {
        const mockColor = 'red'
        const counterButton = renderer
            .create(<CounterButton color={mockColor} />)
            .toJSON();
        expect(counterButton).toMatchSnapshot();
    });

    it('correctly increments the counter', async () => {
        const mockColor = 'red'
        const user = userEvent.setup()

        render(<CounterButton color={mockColor} />);
        const wrapper = screen.getByTestId('counter')

        await user.click(wrapper)
        expect(wrapper.innerHTML).toEqual('Count: 1')
    })
})