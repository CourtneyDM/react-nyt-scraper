import React, { Component } from 'react';
import { Button } from '../Form';
import API from '../../utils/API';


export class ArticleListItem extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: '',
            url: '',
            date: '',
            articles: ''
        };
    }

    componentDidMount() {
        this.setState( {
            title: this.props.title,
            url: this.props.url,
            date: this.props.date
        } );
    }

    saveArticle = event => {
        event.preventDefault();
        // alert( `${this.state.title}` );
        API.saveArticle( {
            title: this.state.title,
            url: this.state.url,
            date: this.state.date
        } )
            .then( res => console.log( res ) ).catch( error => console.log( error ) );
    }

    // Call API to get articles from database
    loadArticles = () => {
        API.getArticles()
            .then( res => this.setState( { articles: res.data } ) )

            .catch( error => { throw error } );
    }

    render() {
        return (

            <React.Fragment>
                <li className='list-group-item list-item'>
                    <h5>{ this.props.title }</h5>
                    <span>Link to Article:{ " " }
                        <a href={ this.props.url } target='_blank'>{ this.props.url }</a>
                    </span>

                    <p>Date Published: { this.props.date }</p>
                    <Button
                        name={ this.props.name }
                        onClick={ this.saveArticle }
                        text='Save Article' />
                </li>
            </React.Fragment> );
    }
}