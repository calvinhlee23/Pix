import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import ImageMiddleware from './image_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ImageMiddleware
);

export default RootMiddleware;
