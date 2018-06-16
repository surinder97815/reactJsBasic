//action types for reducer
import * as types from './ActionTypes';

//--------------main navigation actions-----------//
export const showLoader = (toggleValue) => {
  return {
    type: types.IS_LOADING,
    payload: toggleValue
  }
}










