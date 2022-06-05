import { rootReducer } from "../Reducers";

import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";

export const store = createStore(
    rootReducer, applyMiddleware(Thunk)
);

