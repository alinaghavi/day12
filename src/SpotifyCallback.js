import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class SpotifyCallback extends Component {
    componentDidMount() {
        let urlParams = new URLSearchParams(this.props.location.hash.slice(1));
        let accessToken = urlParams.get('access_token');
        localStorage.setItem('access_token', accessToken);
    }

    render() {
        return <Redirect to={'/'}/>
    }
}

export default SpotifyCallback;