//action types for reducer
import * as types from '../Actions/ActionTypes';


//initial state of the the reducer
const initState = {
    isLoading: false,
}

// This reducer is used to manage the state of the calculator.
const calculateLoansReducer = (state = initState, action) => {

    switch (action.type) {
        case types.IS_LOADING:
            return {
                ...state,
                isLoading:action
            }
        default:
            return state
    }
}
export default calculateLoansReducer
