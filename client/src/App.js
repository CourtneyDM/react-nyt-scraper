import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import Header from './components/Header';
import Section from './components/Section';
import { Input, Button } from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            startYear: '',
            endYear: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // TODO: Create the componentWillMount method to scrape the NYT website

    // Update state whenever the input form changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`States: ${this.state.topic}, ${this.state.startYear}, ${this.state.endYear}`);
        // TODO: Here is where we will make the call to scrape the NYT site
    }

    render() {
        return (
            <Wrapper >
                <Header
                    title='New York Times Article Scraper'
                    subtitle='Search for and annotate articles of interest!'
                />
                <Section name='search'>
                    <h3>Search</h3>
                    <form>
                        <label htmlFor='topic'>Topic</label>
                        <Input
                            name='topic'
                            placeholder='Enter topic to search (required)'
                            onChange={ this.handleInputChange }
                        />
                        <label htmlFor='startYear'>Start Year</label>
                        <Input
                            name='startYear'
                            placeholder='Enter Start Year (required)'
                            onChange={ this.handleInputChange }
                        />
                        <label htmlFor='endYear'>End Year</label>
                        <Input
                            name='endYear'
                            placeholder='Enter an End Year (required)'
                            onChange={ this.handleInputChange }
                        />
                        <Button
                            text='Search'
                            onClick={ this.handleFormSubmit }
                        />
                    </form>
                </Section>

                <Section name='results'>
                    <h3>Results</h3>
                    <Button text='Save Article' />

                </Section>

                <Section name='saved'>
                    <h3>Saved Articles</h3>
                    <Button text='Remove Article' />

                </Section>
            </Wrapper >
        );
    }
}

export default App;