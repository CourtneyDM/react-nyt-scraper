import React, { Component } from 'react';
import Section from '../../components/Section';
import { Button } from '../../components/Form';

class Saved extends Component {
    render() {
        return (
            <Section name='saved'>
                <h3>Saved Articles</h3>
                <Button text='Remove Article' />
            </Section>
        );
    }
}

export default Saved;