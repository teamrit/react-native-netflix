import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {indexReducer} from '../app/indexReducer'; //Import the reducer

// Connect our store to the reducers
export default createStore(indexReducer, applyMiddleware(thunk));