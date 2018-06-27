import React from 'react';
import './Header.css';

const Header = props => (
    <header className='header'>
        <h1>{ props.heading }</h1>
        <h3>{ props.subheading }</h3>
    </header>
);

export default Header;