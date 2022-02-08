import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionType } from "../../../types/userTypes"

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try{
			dispatch({type: UserActionType.FETCH_USERS})
			const response = await axios.get(url)
			setTimeout(() => {
				dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
			}, 1000);
			
		} catch (e) {
			dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: `Произошла ошибка: ${e}` })
		}
	}
}