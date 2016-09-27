import React from 'react';
import ReactDOM from 'react-dom';


import {signup, login,logout} from "./util/session_api_util";

window.signup = signup;
window.login = login;
window.logout = logout;
window.success = (data) => console.log(data);
window.error = (data) => console.log(data);
