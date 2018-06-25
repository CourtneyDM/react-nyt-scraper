import React from 'react';

export const Header = props => (
    <header className='header'>
        <h1>{ props.children }</h1>
        <h3>{ props.children }</h3>
    </header>
)