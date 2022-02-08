import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/typedUseSelector"
import { fetchUsers } from "../store/reducers/actionCreators/fetchUsers"

const UserList: React.FC = () => {
	const dispatch = useDispatch()
	const {error, loading, users} = useTypedSelector(state => state.users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])


	if (loading) {
		return <div>Подождите, идёт загрузка...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return(
		<div>
			<h1>React app</h1>
			{users.map(user => <div key={user.id}>{user.name}</div>)}
		</div>
	)
}

export default UserList