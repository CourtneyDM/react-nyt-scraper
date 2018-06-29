import React, { Component } from 'react';
import Section from '../../components/Section';
import { ArticleList, SavedListItem } from '../../components/Article';
import { Button } from '../../components/Form';
import API from '../../utils/API';

export default class Saved extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            articles: {}
        };

        this.handleClick = this.handleClick.bind( this );
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then( res => {
                // console.log( res.data );
                this.setState( { articles: res.data } );
                // console.log( this.state.articles );
            } )
            .catch( error => console.log( error ) );
    }

    handleClick = id => {
        API.deleteArticle( id )
            // .then( res => console.log( res.data ) )
            .then( res => this.setState( { articles: res.data } ) )
            .catch( error => console.log( error ) );
    }

    render() {
        return (
            <Section
                name='saved'
                header='Saved Articles'>
                { !this.state.articles.length ?
                    ( <h5>No Saved Articles</h5> ) :
                    (
                        <ArticleList>
                            <h5>Saved for Later</h5>
                            { this.state.articles.map( article => {
                                return (
                                    <React.Fragment>
                                        <SavedListItem
                                            key={ article._id }
                                            name='saved'
                                            title={ article.title }
                                            url={ article.url }
                                            date={ article.date }
                                        />
                                        <span><Button
                                            onClick={ () => this.handleClick( article._id ) }
                                            text='Delete Article'
                                        /></span>
                                    </React.Fragment> );
                            } ) }
                        </ArticleList>
                    ) }
            </Section>
        );
    }
}