import renderer from 'react-test-renderer';
import CardList from './CardList';

it('renders CardList component correctly', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'jon snow',
            username: 'jon',
            email: 'jon@gmail.com'
        }
    ]
    const cardList = renderer
        .create(<CardList robots={mockRobots} />)
        .toJSON();
    expect(cardList).toMatchSnapshot();
});