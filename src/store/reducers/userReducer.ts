import { ActionCreatorTypes, ActionTypes, UserState } from "../../types/userTypes"

const inicialState: UserState = { 
	users: [],
	loading: false,
	error: null
}


export const userReducer = (state = inicialState, action: ActionCreatorTypes): UserState => {
	switch(action.type) {
		case ActionTypes.FETCH_USERS:
			return {loading: true, error: null, users:[]}
		case ActionTypes.FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users:[]}
		case ActionTypes.FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		default:
			return state
	}
} 