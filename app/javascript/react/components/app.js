import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import HomePage from './HomePage';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}/>
    </Router>
  )
}

export default App
