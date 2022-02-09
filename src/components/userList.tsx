import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
import { fetchUsers } from "../store/actionCreators/fetchUsers";

const UserList: React.FC = () => {
	const dispatch = useDispatch()
	const {error, loading, users} = useTypedSelector(state => state.usersReducer)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if(loading) return <div>Идёт загрузка, пожалуйста подождите</div>
	if(error) return <div>{error}</div>

	return (
		<div>
			{users.map(user => <div key={user.id}>{user.name}</div>)}
		</div>
	)
}

export default UserList;