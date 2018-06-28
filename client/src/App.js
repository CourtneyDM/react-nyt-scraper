import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Search from './pages/Search';
import Saved from './pages/Saved';


const App = () => (
    <Router>
        <Wrapper>
            <Header
                heading='New York Times Article Finder'
                subheading='Search for and annotate articles of interest!' />
            <Switch>
                <Route exact path='/' component={ Search } />
                <Route exact path='/saved' component={ Saved } />
            </Switch>
        </Wrapper>
    </Router>
);

export default App;