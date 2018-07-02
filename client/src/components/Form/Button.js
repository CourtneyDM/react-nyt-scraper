import React from 'react';
import './Form.css';

export const Button = props => (
    <button onClick={ props.onClick } className={ props.className }>{ props.text }</button>
);