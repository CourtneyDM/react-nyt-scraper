import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from '../Wrapper'
import Header from '../Header';
import Search from '../../pages/Search';
import Saved from '../../pages/Saved';

class Article extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         query: {
    //             topic: '',
    //             start_date: '',
    //             end_date: ''
    //         }
    //     }

    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //     this.handleInputChange = this.handleInputChange.bind(this);
    // }


    // componentDidMount() {
    //     // TODO: Create the componentWillMount method to search the NYT website upon page load
    //     this.setState({
    //         query: {
    //             topic: 'FIFA World Cup',
    //             start_date: '20180614',
    //             end_date: '20180625'
    //         }
    //     });
    //     console.log(this.topic);

    //     // this.searchNYT(this.query);
    // }

    // // Query the NYT API
    // searchNYT = query => {
    //     alert(`Mounted with the initial query ${this.query}`);
    //     // API.getArticles(query)
    //     //     .then(result => console.log(result));
    // }

    // // Update state whenever the input form changes
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     alert(`States: ${this.state.topic}, ${this.state.start_date}, ${this.state.end_date}`);
    //     // this.searchNYT(this.state.query);
    // }

    render() {
        return (
            <Router>
                <Wrapper >
                    <Header
                        title='New York Times Article Finder'
                        subtitle='Search for and annotate articles of interest!'
                    />
                    <Route exact path='/' component={ Search } />
                    <Route path='/saved' component={ Saved } />
                </Wrapper >
            </Router>
        );
    }
}

export default Article;