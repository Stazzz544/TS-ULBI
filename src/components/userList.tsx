import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {
	const {error, loading, users} = useTypedSelector(state => state.users)
	console.log(error, loading)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if (loading) {
		return <h1>Идёт загрузка...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map(user => <div>{user.name}</div>)}
		</div>
	);
};

export default UserList