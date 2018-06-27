import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Section from '../../components/Section';
import { Input, Button } from '../../components/Form';
import Results from '../Results';
import API from '../../utils/API';
import { ResultListItem } from '../Results/ResultListItem';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            startYear: '',
            endYear: '',
            articles: []

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        console.log('Component mounted successfully.');
    }

    // Query the NYT API
    searchNYT = query => {
        // console.log(query);
        API.getArticles(query)
            .then(results => this.setState({
                articles: results.data.response.docs
            })).catch(error => console.log(error));
    }

    // Update state whenever the input form changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const query = {
            q: this.state.topic,
            begin_date: this.state.startYear,
            end_date: this.state.endYear,
            search: true
        };
        // API.getArticles(query)
        //     .then(results => this.setState({
        //         articles: results.data.response.docs
        //     }))
        //     .catch(error => console.log(error));
        // console.log(query);

        this.searchNYT(query);
    }
    render() {
        return (
            <React.Fragment>
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
                            placeholder='YYYY (required)'
                            onChange={ this.handleInputChange }
                        />
                        <label htmlFor='endYear'>End Year</label>
                        <Input
                            name='endYear'
                            placeholder='YYYY (required)'
                            onChange={ this.handleInputChange }
                        />
                        <Button
                            text='Search'
                            onClick={ this.handleFormSubmit }
                        />
                    </form>
                </Section>
                <Section>
                    { !this.state.articles.length ?
                        (<h3>No Articles to Display</h3>) : (
                            <Results>
                                {/* <h3>Articles Found</h3> */ }
                                { this.state.articles.map((article, i) => {
                                    console.log(article);
                                    // return (
                                    //     <ResultListItem
                                    //         headline={ article.headline }
                                    //         url={ article.web_url }
                                    //         date={ article.pub_date }
                                    //     />
                                    // );
                                }) }
                            </Results>
                        ) }
                </Section>

            </React.Fragment>
        );
    }
}
export default Search;