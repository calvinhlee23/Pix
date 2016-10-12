import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import ImageMiddleware from './image_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ImageMiddleware,
  UserMiddleware
);

export default RootMiddleware;
