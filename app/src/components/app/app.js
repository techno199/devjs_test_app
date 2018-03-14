import React from 'react';
import logo from '../../assets/logo.svg'

export class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' />
                    <h1 className='App-title'>Welcome to React!</h1>
                </header>
                <p className='App-intro'>
                    Hi there!
                </p>
            </div>
        )
    }
}
