import React, { Component } from 'react';
import Section from '../../components/Section';
import { Button } from '../../components/Form';

class Results extends Component {
    render() {
        return (
            <Section name='results'>
                <h3>Results</h3>
                <Button text='Save Article' />
            </Section>
        );
    }
}

export default Results;