import renderer from 'react-test-renderer';
import Card from './Card';

it('renders Card component correctly', () => {
    const card = renderer
        .create(<Card />)
        .toJSON();
    expect(card).toMatchSnapshot();
});