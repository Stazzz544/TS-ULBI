import { UserAction, UserActionType, UserState } from "../../types/userTypes"

const inicialState: UserState = {
	loading: false,
	users:[],
	error: null
}

export const userReducer = (state = inicialState, action: UserAction): UserState => {
	switch(action.type){
		case UserActionType.FETCH_USERS: {
			return {loading: true, users:[], error: null}
		}
		case UserActionType.FETCH_USERS_ERROR: {
			return {loading: false, users:[], error: action.payload}
		}
		case UserActionType.FETCH_USERS_SUCCESS: {
			return {loading: false, users: action.payload, error: null}
		}
		default : {
			return state
		}
	}
}