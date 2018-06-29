import React, { Component } from 'react';
import Section from '../../components/Section';
import { ArticleList, ArticleListItem } from '../../components/Article';
import { Form, Input, Button } from '../../components/Form';
import API from '../../utils/API';
import SavedListItem from '../Saved';

export default class Search extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            topic: '',
            startyear: '',
            endYear: '',
            articles: [],
            limit: 5
        };

        this.handleFormSubmit = this.handleFormSubmit.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    componentDidMount() {
        console.log( 'Search component mounted' );
    }

    searchArticles = query => {
        API.searchArticles( query )
            .then( results => {
                this.setState( {
                    topic: '',
                    startYear: '',
                    endYear: '',
                    articles: results.data.response.docs
                } );
                console.log( this.state.articles );
            } )
            .catch( error => console.log( error ) );
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle form submission
    handleFormSubmit = event => {
        event.preventDefault();
        if ( !this.state.topic || !this.state.startYear || !this.state.endYear ) {
            alert( "You must completed the input fields." );
        } else {
            const query = {
                q: this.state.topic,
                begin_date: this.state.startYear,
                end_date: this.state.endYear
            };
            console.log( query );
            this.searchArticles( query );
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* {Search Section } */ }
                <Section
                    name='search'
                    header='Search'>
                    <Form>
                        <Input
                            label='Topic'
                            name='topic'
                            placeholder='Search Topic (required)'
                            onChange={ this.handleInputChange } />

                        <Input
                            label='Start Year'
                            name='startYear'
                            placeholder='YYYY (required)'
                            onChange={ this.handleInputChange } />

                        <Input
                            label='End Year'
                            name='endYear'
                            placeholder='YYYY (required)'
                            onChange={ this.handleInputChange } />

                        <Button
                            onClick={ this.handleFormSubmit }
                            text='Search Articles' />
                    </Form>
                </Section>

                {/* Results Section */ }
                { !this.state.articles.length ? (
                    <Section
                        name='results'
                        header='Results'>
                        <h5>No Articles to Display</h5></Section>
                ) : (
                        <Section
                            name='results'
                            header='Results'>
                            <ArticleList>
                                <h5>Your Results</h5>
                                { this.state.articles.slice( 0, this.state.limit ).map( article => {
                                    return (
                                        <ArticleListItem
                                            key={ article._id }
                                            title={ article.headline.main }
                                            url={ article.web_url }
                                            date={ article.pub_date } />
                                    );
                                } )
                                }
                            </ArticleList>
                        </Section>
                    ) }
                <SavedListItem />
            </React.Fragment>
        );
    }
}