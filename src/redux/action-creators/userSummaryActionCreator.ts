import axios from 'axios';
import { Dispatch } from 'react';
import { userSummaryAction } from '../actions/userSummaryActions';
import {
  userSummaryConstants,
  UserSummaryJSONTypes,
} from '../constants/userSummaryConstants';

export const getUserSummaries =
  (term: string) => async (dispatch: Dispatch<userSummaryAction>) => {
    dispatch({ type: userSummaryConstants.GET_USERS });

    try {
      const { data }: { data: UserSummaryJSONTypes[] } = await axios.get(
        `https://api.github.com/users`
      );

      dispatch({ type: userSummaryConstants.GET_USERS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: userSummaryConstants.GET_USERS_ERROR, payload: error });
    }
  };
