import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from  './app';
import SessionFormContainer from './session/session_form_container';
import StaticPageContainer from './static_page/static_page_container';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path ="/" component = {App}>
    <IndexRoute component = {StaticPageContainer}/>
      <Route path = "signup" component = {SessionFormContainer}/>
      <Route path = "login" component = {SessionFormContainer}/>
      <Route path = "logout" component = {SessionFormContainer}/>
      <Route path = "myStream" component = {null}/>
      <Route path = "followingStream" component = {null}/>
      <Route path = "publicStream" component = {null}/>
    </Route>

  </Router>
);

export default AppRouter;
