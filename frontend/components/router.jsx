import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import { createHashHistory } from 'history';
import App from  './app';

import SessionFormContainer from './session/session_form_container';
import StaticPageContainer from './static_page/static_page_container';
import UserProfileContainer from './user_profile/user_profile_container';
import GreetingPageContainer from './greetings/greetings_container';
import Loader from '../util/loader';

const AppRouter = () => (
  <Router history = {hashHistory}>
    <Route path ="/" component = {App}>
    <IndexRedirect to = "publicImages"/>
      <Route path = "signup" component = {SessionFormContainer}/>
      <Route path = "login" component = {SessionFormContainer}/>
      <Route path = "logout" component = {SessionFormContainer}/>

      <Route path = "followingImages" component = {StaticPageContainer}/>
      <Route path = "publicImages" component = {StaticPageContainer}/>
      <Route path = "myImages" component = {StaticPageContainer}/>
      <Route path = "/user/:userName" component = {StaticPageContainer}/>


      <Route path = "*" component = {Loader}/>
    </Route>
  </Router>
);

export default AppRouter;
