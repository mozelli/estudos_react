import React from 'react';
import Menu from './menu/Menu';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Menu show={false} />
            </header>
        );
    };  
}

export default Header;