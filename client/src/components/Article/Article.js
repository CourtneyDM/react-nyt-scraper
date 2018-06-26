import React, { Component } from 'react';
import Wrapper from '../Wrapper'
import Header from '../Header';
import Section from '../Section';
import { Input, Button } from '../Form';
// import API from './utils';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                topic: '',
                start_date: '',
                end_date: ''
            }
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        // TODO: Create the componentWillMount method to search the NYT website upon page load
        this.setState({
            query: {
                topic: 'FIFA World Cup',
                start_date: '20180614',
                end_date: '20180625'
            }
        });
        console.log(this.topic);

        // this.searchNYT(this.query);
    }

    // Query the NYT API
    searchNYT = query => {
        alert(`Mounted with the initial query ${this.query}`);
        // API.getArticles(query)
        //     .then(result => console.log(result));
    }

    // Update state whenever the input form changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`States: ${this.state.topic}, ${this.state.start_date}, ${this.state.end_date}`);
        // this.searchNYT(this.state.query);
    }

    render() {
        return (
            <Wrapper >
                <Header
                    title='New York Times Article Finder'
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
                        <label htmlFor='start_date'>Start Year</label>
                        <Input
                            name='start_date'
                            placeholder='YYYYMMDD (optional)'
                            onChange={ this.handleInputChange }
                        />
                        <label htmlFor='end_date'>End Year</label>
                        <Input
                            name='end_date'
                            placeholder='YYYYMMDD (optional)'
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

export default Article;