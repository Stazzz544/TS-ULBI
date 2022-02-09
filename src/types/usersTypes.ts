export interface UsersStae{
	users: any[],
	loading: boolean,
	error: null | string,
}

export enum ActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUserAction {
	type: ActionTypes.FETCH_USERS,
}

interface FetchUserActionSuccess {
	type: ActionTypes.FETCH_USERS_SUCCES,
	payload: any[],
}

interface FetchUserActionError {
	type: ActionTypes.FETCH_USERS_ERROR,
	payload: string,
}

export type UserAction = FetchUserAction | FetchUserActionSuccess |FetchUserActionError