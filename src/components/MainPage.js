import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

const MainPage = ({ searchField, onSearchChange, robots, isPending, onRequestRobots }) => {

    useEffect(() => {
        onRequestRobots()
    }, [onRequestRobots])

    const filterRobots = robots => {
        return robots.filter(robot => {
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