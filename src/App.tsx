import React from 'react';
import './App.css';
import { CashOperation } from './components/cashOperation';
import UserList from './components/userList';

function App() {
	return (
		<div className="App">
			<UserList/>
			<hr/>
			<CashOperation/>
		</div>
	);
}

export default App;
