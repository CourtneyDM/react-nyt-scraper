import React from 'react';
import './Section.css';

const Section = props => (
    <div className={ `section ${props.name}` }>
        <h2>{ props.header }</h2>
        { props.children }
    </div>
);

export default Section;