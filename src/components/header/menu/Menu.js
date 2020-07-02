import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenuList: true
        }

        this.changeStateOfShowMenuList = this.changeStateOfShowMenuList.bind(this);
    }

    changeStateOfShowMenuList() {
        this.setState(state => ({
            showMenuList: !state.showMenuList
        }));
    }

    render() {
        let list;
        if (!this.state.showMenuList) {
            list = 
            <nav>
                <div className="list-group mt-2">
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Página inicial
                </a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Sobre a ABRAPAE
                </a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Por que me associar?
                </a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Quero me associar
                </a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Fale conosco!
                </a>
                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                        Contatos
                </a>
                </div>
            </nav>;
        }
        return (
            <div>
                <button className="btn btn-secondary mt-3" onClick={this.changeStateOfShowMenuList}>
                    Menu
                </button>
                { list }

            </div>
        );
    };
}

export default Menu;