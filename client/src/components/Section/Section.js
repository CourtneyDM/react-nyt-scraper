import React from 'react';
import './Section.css';

const Section = (props) => (
    <div className='section'>
        { props.children }
    </div>
);

export default Section;