import { CashActionType, CashActionTypes, CashState } from "../../types/cashTypes"

const inicialState: CashState = {
	cash: 0,
	loading: false,
	error: null,
}

export const cashReducer = (state = inicialState, action: CashActionType): CashState => {
	switch(action.type) {
		case CashActionTypes.CASH_OPERATION_IN_PROCESS: {
			return {cash: state.cash, loading: true, error: null}
		}
		case CashActionTypes.ADD_CASH_SUCCESS: {
			return {cash: state.cash + action.payload, loading: false, error: null}
		}
		case CashActionTypes.GET_CASH_SUCCESS: {
			return {cash: state.cash - action.payload, loading: false, error: null}
		}
		case CashActionTypes.ADD_CASH_ERROR: {
			return {cash: state.cash, loading: false, error: action.payload}
		}
		default: {
			return {...state}
		}
	}
}