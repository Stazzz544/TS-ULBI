import  axios  from "axios"
import { disconnect } from "process"
import { Dispatch } from "redux"
import { ActionCreatorTypes, ActionTypes } from "../../types/userTypes"

export const fetchUsers = () => {
	return async (dispatch: Dispatch<ActionCreatorTypes>) => {
		try {
			dispatch({type: ActionTypes.FETCH_USERS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({type: ActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
		} catch (e) {
			dispatch({type:ActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка во время загрузки'})
		}
	}
}