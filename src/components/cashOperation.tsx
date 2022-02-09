import { useDispatch } from "react-redux"
import { useTypedSelector } from "../store"
import { CashActionTypes } from "../types/cashTypes"

export const CashOperation: React.FC = () => {

const dispatch = useDispatch()
const {cash,error, loading} = useTypedSelector(state => state.cashReducer)


if(loading) return <h3>Выполняется операция, подождите</h3>
if(error) return <h3>Ошибка операции</h3>

const addMoney = (num: number) => {
	dispatch({type: CashActionTypes.CASH_OPERATION_IN_PROCESS})
	setTimeout(() => {
	dispatch({type: CashActionTypes.ADD_CASH_SUCCESS, payload: num})
	}, 700);
}
const getMoney = (num: number) => {
	dispatch({type: CashActionTypes.CASH_OPERATION_IN_PROCESS})
	setTimeout(() => {
	dispatch({type: CashActionTypes.GET_CASH_SUCCESS, payload: num})
	}, 700);
}


	return(

		<div>
			{cash === 0 || cash < 0 ? <div> На счету нет средств</div>
			:
			<div>На счету {cash}$</div>
			}
			<button onClick = {() => addMoney(Number(prompt()))}>add cash</button>
			<button onClick = {() => getMoney(Number(prompt()))}>get cash</button>
		</div>
	)
}