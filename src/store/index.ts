
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer, RootState } from "./reducers";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector