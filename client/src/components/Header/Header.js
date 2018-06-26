import React from 'react';
import './Header.css';

const Header = (props) => (
    <header className='header'>
        <h1>{ props.title }</h1>
        <h5>{ props.subtitle }</h5>
    </header>
);

export default Header;