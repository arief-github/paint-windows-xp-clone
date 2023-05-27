import { rootReducer } from "../reducer/rootReducer";
import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
