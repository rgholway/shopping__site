import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import HomePage from './HomePage';
import ItemShow from './ItemShow';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}/>
      <Route path="/items/:id" component={ItemShow}/>
    </Router>
  )
}

export default App
