import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Search from './pages/Search';


const App = () => (
    <Router>
        <Wrapper>
            <Header
                heading='New York Times Article Finder'
                subheading='Search for and annotate articles of interest!' />
            <Route exact path='/' component={ Search } />
            {/* <Route path='/saved' component={ Saved } /> */ }
        </Wrapper>
    </Router>
);

export default App;