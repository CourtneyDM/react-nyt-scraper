import React from 'react';
import './Form.css';

export const Input = props => (
    <React.Fragment>
        <div className="form-group">
            { props.children }
            <input className="form-control" { ...props } />
        </div>
        <br />
    </React.Fragment>
);