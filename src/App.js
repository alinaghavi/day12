import React from 'react';
import './App.css';
import SpotifyCallback from './SpotifyCallback'
import {Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import Categories from "./Categories";

function App() {
    return (
        <div className="app">
            <nav>
                <ul className="nav-bar">
                    <li>
                        <a href="https://accounts.spotify.com/authorize?client_id=fc9cd03698bb431f8510647ec95622de&response_type=token&redirect_uri=http://localhost:3000/callback/">
                            Login
                        </a>
                    </li>
                    <li>
                        <Link to={'/categories'} >Categories</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/callback" component={SpotifyCallback}/>
            <Route path="/categories" component={Categories}/>
        </div>
    );
}

export default App;
