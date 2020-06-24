import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  compose(
    devToolsEnhancer(),
    applyMiddleware(thunk),
  ),
);

export default store;
