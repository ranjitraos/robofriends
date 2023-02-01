import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';

import { requestRobots, setSearchField } from '../actions';
import MainPage from '../components/MainPage';

const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => dispatch(setSearchField((e.target as HTMLInputElement).value)),
        onRequestRobots: () => dispatch(requestRobots() as any)
    }
}

const App = (props: any): JSX.Element => {
    return <MainPage {...props} />
}


export default connect(mapStateToProps, mapDispatchToProps)(App);