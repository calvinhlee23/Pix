import React from 'react';
import ReactDOM from 'react-dom';

import {signup, login,logout} from "./util/session_api_util";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  var store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
    window.store = store;
  } else {
    store = configureStore();
    window.store = store;
  }
  ReactDOM.render(<Root store = {store}/>, document.getElementById("root"));
});


window.signup = signup;
window.login = login;
window.logout = logout;
window.success = (data) => console.log(data);
window.error = (data) => console.log(data);
