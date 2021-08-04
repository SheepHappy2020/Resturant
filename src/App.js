import React from 'react';
import './App.css';

import HomePage from './Components/home/homepage';
import CategoriesPage from './Components/Categoris/categories';

import {BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import Button from "./Components/Button/Button";

function App() {
    return(
        <Router>
        <div>
                <Route exact path='/' component={HomePage}/>
                <Route path='/Categories' component={CategoriesPage}/>
        </div>
            </Router>


    );

}

export default App;
