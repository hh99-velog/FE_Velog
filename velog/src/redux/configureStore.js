import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import preview from "./modules/preview";
import main from "./modules/main";
import detail from "./modules/detail";
import comment from "./modules/comment";
import modal from "./modules/modal";
import like from "./modules/like";


export const history = createBrowserHistory();

const rootReducer = combineReducers({
  like:like,
  modal:modal,
  comment:comment,
  main:main,
  user: User,
  detail:detail,
  preview: preview,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
