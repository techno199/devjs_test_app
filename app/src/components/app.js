import React from 'react';
import logo from '../assets/logo.svg';
import { DatePicker } from 'antd';
import { Studios } from '../containers/studios';

export class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' />
                    <h1 className='App-title'>TAKELOOK</h1>
                </header>
                <Studios />
            </div>
        )
    }
}
