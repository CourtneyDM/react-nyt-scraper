import React from 'react';
import './Form.css'

export const Input = props => (
    <React.Fragment>
        <div className='form-group'>
            <label htmlFor={ props.name }>{ props.label }</label>
            <input name={props.name} type='text' className='form-control' placeholder={ props.placeholder } onChange={ props.onChange } />
        </div>
        <br />
    </React.Fragment>
);