import React from 'react';
//import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if(props.celcius >= 100) {
        return <p>Ferveria.</p>;
    }
    return <p>Não ferveria.</p>;
}

class Calculator extends React.Component {

    render() {
        return (
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>
        );
    }
}

export default Calculator;