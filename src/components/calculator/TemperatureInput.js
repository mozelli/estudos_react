import React from 'react';

const scaleNames = {
    c: "Celcius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            temperature: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            temperature: event.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
                <input className="form-control" value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;