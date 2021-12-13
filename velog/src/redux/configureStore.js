import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";


export const history = createBrowserHistory();

const rootReducer = combineReducers({
    
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
