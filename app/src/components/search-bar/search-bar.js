import React from 'react';
import Button, { Input, Card, Slider } from 'antd'

import './search-bar.css';

export class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {sliderValue: [0,0]}
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }

    handleSliderChange(value) {
        this.setState({
            sliderValue: value
        });
    }

    render() {
        let minPriceStudio = {price: 0};
        let maxPriceStudio = {price: 0};
        if (this.props.studios.length > 0) {
            minPriceStudio = this.props.studios.reduce((currentMin, currentValue) => {
                return currentMin.price > currentValue.price ? currentValue : currentMin;
            });
            maxPriceStudio = this.props.studios.reduce((currentMax, currentValue) => {
                return currentMax.price < currentValue.price ? currentValue : currentMax;
            });
        }

        return (
            <div className='search-bar_container'>
                <Input 
                // TODO: обработка ввода
                className='search-input' 
                placeholder='Basic usage' />
                <div className='search-input_keywords'>
                    {
                        this.props.keyWords.map((kw) => (
                            <Button type='primary'>
                                {kw}
                            </Button>
                        ))
                    }
                </div>
                <Card >
                    <div className='slider_price_container'>
                        <div className='slider_price'>
                            Стоимость
                        </div>
                        <div className='slider_price_range'>
                            {minPriceStudio.price} - {maxPriceStudio.price}
                        </div>
                    </div>
                    <Slider range min={minPriceStudio.price} 
                        max={maxPriceStudio.price} value={this.state.sliderValue}
                        onChange={this.handleSliderChange}/>
                </Card>
            </div>
        )
    }
}