﻿
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from '../components/Hello';

export interface HomeState {
    loaded: boolean;
}

export default class HomeView extends React.Component<{}, HomeState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    render() {
        const loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>Home {loading}</h2>
            <Hello name="world" />
            <Hello name="gswwfe" />
            <div><Link to="/about">About</Link></div>
            <div><Link to="/container">Container</Link></div>
        </div>;
    }
}
