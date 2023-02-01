import React, { useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IMainPageProps {
    searchField: string,
    onSearchChange(e: React.SyntheticEvent<HTMLInputElement>): void,
    robots: IRobot[],
    isPending: boolean,
    onRequestRobots: Function
}

const MainPage: React.FC<IMainPageProps> = ({ searchField, onSearchChange, robots, isPending, onRequestRobots }) => {

    useEffect(() => {
        onRequestRobots()
    }, [onRequestRobots])

    const filterRobots = (robots: IRobot[]) => {
        return robots.filter((robot: IRobot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }
    return isPending ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots(robots)} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}


export default MainPage;