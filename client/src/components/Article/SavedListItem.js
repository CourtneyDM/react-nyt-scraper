import React, { Component } from 'react';
import { Button } from '../Form';
import API from '../../utils/API';


export class SavedListItem extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            articles: {}
        }
    }

    // Get articles from database upon component mount
    componentDidMount() {
        this.loadArticles()
    }

    // Call API to get articles from database
    loadArticles = () => {
        API.getArticles()
            .then( res => this.setState( { articles: res.data } ) )

            .catch( error => { throw error } );
    }

    // Call API to delete article from database
    handleClick = id => {
        API.deleteArticle( id )
            .then( res => this.loadArticles() )
            .catch( error => { throw error } );
    }

    // Render SavedListItem component
    render() {
        return (
            <React.Fragment>
                <h3>Saved Articles</h3>
                {
                    !this.state.articles.length ? (
                        <h5>No Saved Articles</h5>
                    ) : (
                            <React.Fragment>
                                <h5>Articles Saved for Later</h5>
                                { this.state.articles.map( article => {
                                    return (
                                        <React.Fragment>
                                            <li key={ article._id } className='list-group-item list-item'>
                                                <h5>{ article.title }</h5>
                                                <span>Link to Article: { "" }
                                                    <a href={ article.url } target="_blank">{ article.url }</a>
                                                </span>
                                                <p>Date Published: { article.date }</p>
                                                <Button
                                                    onClick={ () => this.handleClick( article._id ) }
                                                    text="Delete Article" />
                                            </li>
                                        </React.Fragment>
                                    )
                                } ) }
                            </React.Fragment>
                        )
                }</React.Fragment>
        );
    }
}