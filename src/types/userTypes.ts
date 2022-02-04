
export interface UserState {
	users: any[],
	loading: boolean,
	error: null | string
}

export enum ActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
}

interface fetchingAction{
	type: ActionTypes.FETCH_USERS,
}

interface fetchingActionSuccess{
	type: ActionTypes.FETCH_USERS_SUCCESS,
	payload: any[],

}

interface fetchingActionError{
	type: ActionTypes.FETCH_USERS_ERROR,
	payload: string,
}

export type ActionCreatorTypes = fetchingAction | fetchingActionSuccess | fetchingActionError