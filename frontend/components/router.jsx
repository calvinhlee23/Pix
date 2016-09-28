import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from  './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path ="/" component = {App}>
    <IndexRoute component = {GreetingContainer}/>
      <Route path = "signup" component = {SessionFormContainer}/>
      <Route path = "login" component = {SessionFormContainer}/>
      <Route path = "logout" component = {SessionFormContainer}/>
    </Route>
  </Router>
);

export default AppRouter;
