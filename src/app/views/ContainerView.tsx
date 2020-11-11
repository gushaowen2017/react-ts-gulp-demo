
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from '../components/Hello';

export interface HomeState {
    loaded: boolean;
}

export default class ContainerView extends React.Component<{}, HomeState> {
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
            <h2>Container {loading}</h2>
            <Hello name="gsw" />
            {/*<div><Link to="/about">About</Link></div>*/}
        </div>;
    }
}
