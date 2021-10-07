import { userSummaryAction } from '../actions/userSummaryActions';
import {
  userSummaryConstants,
  UserSummaryJSONTypes,
} from '../constants/userSummaryConstants';

interface userSummaryState {
  loading: boolean;
  error: string | null;
  data: UserSummaryJSONTypes[] | null;
}

const initialState: userSummaryState = {
  loading: false,
  error: null,
  data: null,
};

export default (
  state = initialState,
  action: userSummaryAction
): userSummaryState => {
  switch (action.type) {
    case userSummaryConstants.GET_USERS:
      return { ...state, loading: true, error: null };

    case userSummaryConstants.GET_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case userSummaryConstants.GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
