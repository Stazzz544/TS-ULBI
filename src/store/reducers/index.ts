import { combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { usersReducer } from "./usersReducer";


export const rootReducer = combineReducers({
	usersReducer,
	cashReducer,
})

export type RootState = ReturnType<typeof rootReducer>