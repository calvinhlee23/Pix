import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from  './components';


const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route Path ="/" component = {App}>
    </Route>
  </Router>
);

export default AppRouter;
