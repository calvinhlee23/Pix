import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from  './app';
import SessionFormContainer from './session/session_form_container';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path ="/" component = {App}>
    <Route path = "session" component = {SessionFormContainer}/>
    </Route>
  </Router>
);

export default AppRouter;
