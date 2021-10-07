import { AlertAction } from '../actions/alertActions';
import { AlertConstants } from '../constants/alertConstants';

interface AlertState {
  message: string;
  alertType: string;
}

const initialState: AlertState = {
  message: '',
  alertType: '',
};

export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case AlertConstants.SHOW_ALERT:
      return {
        ...state,
        alertType: action.payload.type,
        message: action.payload.msg,
      };

    case AlertConstants.REMOVE_ALERT:
      return { ...state, alertType: '', message: '' };

    default:
      return state;
  }
};
