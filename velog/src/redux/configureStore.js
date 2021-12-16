import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import preview from "./modules/preview";
import main from "./modules/main";
import Detail from "./modules/detail";


export const history = createBrowserHistory();

const rootReducer = combineReducers({
  main:main,
  user: User,
  detail:Detail,
  preview: preview,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
