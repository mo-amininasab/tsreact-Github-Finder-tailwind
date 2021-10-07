import { AlertAction } from '../actions/alertActions';
import { AlertConstants } from '../constants/alertConstants';

export const showAlert = (msg: string, type: string): AlertAction => {
  return { type: AlertConstants.SHOW_ALERT, payload: { msg, type } };
};

export const removeAlert = (): AlertAction => {
  return { type: AlertConstants.REMOVE_ALERT };
};
