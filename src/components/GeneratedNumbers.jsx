import './GeneratedNumbers.css';
import React from 'react';


class GeneratedNumbers extends React.Component {

    constructor() {
        super();
        this.state = { 
            random: 0,
            random2: 0,
            random3: 0,
            random4: 0,
            random5: 0,
            random6: 0,
            random7: 0,
            reset: false,
        };
    };

    handleClick = () => {
        this.setState({random: Math.floor(Math.random() * (47 - 1)) + 1,
                      random2: Math.floor(Math.random() * (47 - 1)) + 1,
                      random3: Math.floor(Math.random() * (47 - 1)) + 1,
                      random4: Math.floor(Math.random() * (47 - 1)) + 1,
                      random5: Math.floor(Math.random() * (47 - 1)) + 1,
                      random6: Math.floor(Math.random() * (47 - 1)) + 1,
                      random7: Math.floor(Math.random() * (7 - 1)) + 1,
                      reset: true,})
    }

    resetNumbers = () => {
        this.setState({
            reset: false
        })
    }

    render() {
        return (
            <>
            {this.state.reset && <div className="numbers">
                <div className="randomNumber">{this.state.random}</div>
                <div className="randomNumber">{this.state.random2}</div>
                <div className="randomNumber">{this.state.random3}</div>
                <div className="randomNumber">{this.state.random4}</div>
                <div className="randomNumber">{this.state.random5}</div>
                <div className="randomNumber">{this.state.random6}</div>
                <div className="extraNumber">{this.state.random7}</div>
            </div>}


             <button onClick={this.resetNumbers} className="button1">Reset</button>
             <button onClick={this.handleClick}className="button2">Show me lucky numbers</button>
            </>

        )
    }
}
export default GeneratedNumbers;