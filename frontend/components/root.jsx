import React from 'react';
import AppRouter from './router';
import {Provider} from 'react-redux';

const Root = ({store}) => (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
);


export default Root;
