import {
  userDetailConstants,
  UserDetailJSONTypes,
} from '../constants/userDetailConstants';

interface GetUserAction {
  type: userDetailConstants.GET_USER;
}

interface GetUserSuccessAction {
  type: userDetailConstants.GET_USER_SUCCESS;
  payload: UserDetailJSONTypes;
}

interface GetUserErrorAction {
  type: userDetailConstants.GET_USER_ERROR;
  payload: string;
}

export type UserDetailAction =
  | GetUserAction
  | GetUserSuccessAction
  | GetUserErrorAction;
