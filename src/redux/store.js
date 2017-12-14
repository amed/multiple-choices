import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';
import thunk from 'redux-thunk';


const store = applyMiddleware(thunk)(createStore)(appReducer);

export default store;
