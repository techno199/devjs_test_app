import React from 'react';
import { fetchStudios } from '../../actons';
import './studios.css';

export class StudiosComponent extends React.Component {
    componentDidMount() {
        this.props.loadStudios();
    }

    render() {
        return (
            <div className='studios_container'>
                {
                    this.props.studios.map((studio) => (
                        <div key={studio.id} className='studio_container'>
                            <div className='studio_view'>
                                <img src={studio.view} />
                            </div>
                            <div className='studio_name'>
                                {studio.name}
                            </div>
                            <div className='studio_price'>
                                {studio.price} р.
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}