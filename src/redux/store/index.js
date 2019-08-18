
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import trackReducer from '../reducers/index'
import thunk from 'redux-thunk'

const store = createStore(trackReducer, composeWithDevTools(
    applyMiddleware(thunk),
));


export default store;