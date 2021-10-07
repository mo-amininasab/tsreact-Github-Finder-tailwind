import {
  userSummaryConstants,
  UserSummaryJSONTypes,
} from '../constants/userSummaryConstants';

interface GetUsersAction {
  type: userSummaryConstants.GET_USERS;
}

interface GetUsersActionSuccess {
  type: userSummaryConstants.GET_USERS_SUCCESS;
  payload: UserSummaryJSONTypes[];
}

interface GetUsersActionError {
  type: userSummaryConstants.GET_USERS_ERROR;
  payload: string;
}

interface ClearUsersAction {
  type: userSummaryConstants.CLEAR_USERS;
}

export type userSummaryAction =
  | GetUsersAction
  | GetUsersActionSuccess
  | GetUsersActionError
  | ClearUsersAction;
