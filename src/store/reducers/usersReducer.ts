import { ActionTypes, UserAction, UsersStae } from "../../types/usersTypes"

const inicialState: UsersStae = {
	users: [],
	loading: false,
	error: null,
}

export const usersReducer = (state = inicialState, action: UserAction): UsersStae => {
	switch(action.type){
		case ActionTypes.FETCH_USERS:{
			return {users: [], error: null , loading: true}
		}
		case ActionTypes.FETCH_USERS_SUCCES:{
			return {users: action.payload, error: null , loading: false}
		}
		case ActionTypes.FETCH_USERS_ERROR:{
			return {users: [], error: action.payload, loading: false }
		}
		default :{
			return state
		}
	}
}