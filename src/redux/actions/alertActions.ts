import { AlertConstants } from '../constants/alertConstants';

interface ShowAlertAction {
  type: AlertConstants.SHOW_ALERT;
  payload: { msg: string; type: string };
}

interface RemoveAlertAction {
  type: AlertConstants.REMOVE_ALERT;
}

export type AlertAction = ShowAlertAction | RemoveAlertAction;
