require('babel-polyfill');

import {createStore} from 'redux';

import * as reducers from './reducers/index';
import * as actions from './actions/index';

const store = createStore(reducers.hotColdReducer);

store.dispatch(actions.NewGame());
store.dispatch(actions.submitNumber(4));
console.log(store.getState());
store.dispatch(actions.submitNumber(2));
console.log(store.getState());

store.dispatch(actions.NewGame());
store.dispatch(actions.submitNumber(42));


console.log(store.getState());
