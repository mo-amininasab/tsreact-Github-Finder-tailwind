import axios from 'axios';
import { Dispatch } from 'react';
import { UserDetailAction } from '../actions/userDetailActions';
import {
  userDetailConstants,
  UserDetailJSONTypes,
} from '../constants/userDetailConstants';

export const getUserDetail =
  (userName: string) => async (dispatch: Dispatch<UserDetailAction>) => {
    dispatch({ type: userDetailConstants.GET_USER });

    try {
      const { data }: { data: UserDetailJSONTypes } = await axios.get(
        `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: userDetailConstants.GET_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: userDetailConstants.GET_USER_ERROR, payload: error });
    }
  };
