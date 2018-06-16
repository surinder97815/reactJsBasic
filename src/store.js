import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(promise(), thunk);
export default createStore(rootReducer, middleware);
