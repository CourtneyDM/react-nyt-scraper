import React from 'react';
import Section from '../../components/Section';
import { Button } from '../../components/Form';

const Saved = props => (
    <React.Fragment>
        <Section
            name='saved'
            header='Saved Articles'><Button
                text='Get Saved Articles'
                onClick={ this.handleClick } /></Section>

    </React.Fragment>
);

export default Saved;