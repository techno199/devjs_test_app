import React from 'react';
import logo from '../../assets/logo.svg';
import { DatePicker } from 'antd';
import { Studios } from '../../containers/studios';
import { SearchBar } from '../../containers/search-bar';
import './app.css';


export class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' />
                    <h1 className='App-title'>TAKELOOK</h1>
                </header>
                <content className='main-content'>
                    <div className='main-content_search-bar_wrapper'>
                        <SearchBar />
                    </div>
                    <div className='main-content_studios_wrapper'>
                        <Studios />
                    </div>             
                </content>
            </div>
        )
    }
}
