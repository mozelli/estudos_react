import React from 'react';

class FormFaleConosco extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            cellPhone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'name':
                this.setState({
                    name: event.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                });
                break;
            case 'phone':
                this.setState({
                    phone: event.target.value
                });
                break;
            case 'cellPhone':
                this.setState({
                    cellPhone: event.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Nome
                        </label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" aria-describedby="nameHelp" />
                        <small id="nameHelp" className="form-text text-muted">
                            Digite o seu nome.
                            </small>
                    </div>
                    <div className="form-group">
                        <label>
                            E-mail
                        </label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">
                            Digite o seu e-mail.
                        </small>
                    </div>
                    <div className="form-group">
                        <label>
                            Telefone
                        </label>
                        <input type="text" value={this.state.phone} onChange={this.handleChange} className="form-control" id="phone" aria-describedby="phoneHelp" />
                        <small id="phoneHelp" className="form-text text-muted">
                            (00) 0000-0000
                        </small>
                    </div>
                    <div className="form-group">
                        <label>
                            Celular
                        </label>
                        <input type="text" value={this.state.cellPhone} onChange={this.handleChange} className="form-control" id="cellPhone" aria-describedby="cellPhoneHelp" />
                        <small id="cellPhoneHelp" className="form-text text-muted">
                            (00) 0 0000-0000
                        </small>
                    </div>
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>
                <p>{this.state.cellPhone}</p>
            </div>

        );
    }
}

export default FormFaleConosco;