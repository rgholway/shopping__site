import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import HomePage from './HomePage';
import ItemShow from './ItemShow';
import CartShow from './CartShow';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}/>
      <Route path="/items/:id" component={ItemShow}/>
      <Route path="/cart/:id" component={CartShow}/>
    </Router>
  )
}

export default App
