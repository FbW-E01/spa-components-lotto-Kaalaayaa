import './Button1.css';
import React from 'react';


class Button1 extends React.Component {

    randomNumbers = () => {
        
    }

    render() {
        return (
            <button onClick={this.randomNumbers}className="button2">Show me lucky numbers</button>
        )
    }
}
export default Button1;