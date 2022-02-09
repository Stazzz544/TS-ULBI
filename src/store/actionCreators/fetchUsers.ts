import axios from "axios"
import { Dispatch } from "redux"
import { ActionTypes, UserAction } from "../../types/usersTypes"

export const fetchUsers = () => {
	const url = 'https://jsonplaceholder.typicode.com/users';

	return async (dispatch: Dispatch<UserAction>) => {
		try{
			dispatch({type: ActionTypes.FETCH_USERS})
			const response = await axios.get(url)
			setTimeout(() => {
				dispatch({type: ActionTypes.FETCH_USERS_SUCCES, payload: response.data}) 
			}, 1000);
			
		} catch (error) {
			dispatch({type:ActionTypes.FETCH_USERS_ERROR, payload:`Произошла ошибка: ${error}`})
		}
	}
}