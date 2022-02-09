export interface CashState{
	cash: number,
	loading: boolean,
	error: null | string,
}

export enum CashActionTypes {
	CASH_OPERATION_IN_PROCESS = 'CASH_OPERATION_IN_PROCESS',
	ADD_CASH_SUCCESS = 'ADD_CASH_SUCCESS',
	GET_CASH_SUCCESS = 'GET_CASH_SUCCESS',
	ADD_CASH_ERROR = 'ADD_CASH_ERROR'
}

interface CashOperationInProcessAction{
	type: CashActionTypes.CASH_OPERATION_IN_PROCESS,
}

interface AddCashSuccesAction{
	type: CashActionTypes.ADD_CASH_SUCCESS,
	payload: number,
}

interface RemoveCashAction{
	type: CashActionTypes.GET_CASH_SUCCESS,
	payload: number,
}

interface addCashErrorAction{
	type: CashActionTypes.ADD_CASH_ERROR,
	payload: string,
}

export type CashActionType = 
CashOperationInProcessAction |
AddCashSuccesAction |
RemoveCashAction |
addCashErrorAction;