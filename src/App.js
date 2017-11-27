import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './style/App.css';
import './style/Navbar.css';
import './style/contacts-list.css';
import MyNavbar from './components/navbar.js';
import ContactList from './components/contact-list.js';



class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route component={MyNavbar}/>
                    <Route path="/" component={ContactList}/>
                    <Route path="/contacts-book" component={ContactList}/>
                </div>
            </Router>
        );
    }
}

export default App;
