import React from 'react';
import logo from './devmind.png';
import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Welcome! This is my first React app!</p>
                    <a className="App-link" href="https://www.devmind.ro" target="_blank" rel="noopener noreferrer">
                        Visit Us
                    </a>
                </header>
            </div>
        );
    }
}
