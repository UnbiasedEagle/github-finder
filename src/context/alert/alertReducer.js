import AlertActionTypes from './types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case AlertActionTypes.CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
