import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { createHashHistory } from 'history';
import App from  './app';
import SessionFormContainer from './session/session_form_container';
import StaticPageContainer from './static_page/static_page_container';
import UserProfileContainer from './user_profile/user_profile_container';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path ="/" component = {App}>
    <IndexRoute component = {StaticPageContainer}/>
      <Route path = "signup" component = {SessionFormContainer}/>
      <Route path = "login" component = {SessionFormContainer}/>
      <Route path = "user/:userName" component = {UserProfileContainer}/>
    </Route>
  </Router>
);

export default AppRouter;
