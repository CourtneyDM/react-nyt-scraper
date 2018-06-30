import React, { Component } from 'react';
import Section from '../../components/Section';
import { ArticleList, ArticleListItem, SavedListItem } from '../../components/Article';
import { Form, Input, Button } from '../../components/Form';
import API from '../../utils/API';

export default class Search extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            topic: '',
            startyear: '',
            endYear: '',
            articles: [],
            saved: [],
            limit: 5
        };

        this.handleFormSubmit = this.handleFormSubmit.bind( this );
        this.handleInputChange = this.handleInputChange.bind( this );
    }

    componentDidMount() {
        console.log( 'Search component mounted' );
        this.loadArticles();
    }

    // Get all saved articles from database
    loadArticles = () => {
        API.getArticles()
            .then( res => this.setState( { saved: res.data } ) )
            .catch( error => { throw error } );
    }

    // Call API to search articles from NYT database
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

    // Save an article to the database
    saveArticle = article => {
        // event.preventDefault();
        // alert( article.title );
        API.saveArticle( article )
            .then( res => this.loadArticles() )
            .catch( error => console.log( error ) );
    }
    // Delete an article from the database
    deleteArticle = id => {
        API.deleteArticle( id )
            .then( res => this.loadArticles() )
            .catch( error => { throw error } );
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
                                { this.state.articles.slice( 0, this.state.limit ).map( result => {
                                    return (
                                        <ArticleListItem
                                            key={ result._id }
                                            title={ result.headline.main }
                                            url={ result.web_url }
                                            date={ result.pub_date }
                                            onClick={ () => this.saveArticle( {
                                                title: result.headline.main,
                                                url: result.web_url,
                                                date: result.pub_date
                                            } ) } />
                                    );
                                } )
                                }
                            </ArticleList>
                        </Section>
                    ) }

                {/* Saved Articles Section */ }
                {
                    !this.state.saved.length ? (
                        <Section name='saved'
                            header='Saved Articles'>
                            <h5>No Saved Articles</h5>
                        </Section>
                    ) : (
                            <Section
                                name='saved'
                                header='Saved Articles'>

                                <ArticleList>
                                    <h5>Saved for Later</h5>
                                    { this.state.saved.map( article => {
                                        return (
                                            <SavedListItem
                                                key={ article._id }
                                                title={ article.title }
                                                url={ article.url }
                                                date={ article.date }
                                                text='Delete Article'
                                                onClick={ () => this.deleteArticle( article._id ) }
                                            /> )
                                    } ) }
                                </ArticleList>
                            </Section>
                        )
                }
            </React.Fragment>
        );
    }
}