import { userSummaryAction } from '../actions/userSummaryActions';
import {
  userSummaryConstants,
  UserSummaryJSONTypes,
} from '../constants/userSummaryConstants';

interface userSummaryState {
  loading: boolean;
  error: string | null;
  data: UserSummaryJSONTypes[] | [];
}

const initialState: userSummaryState = {
  loading: false,
  error: null,
  data: [],
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

    case userSummaryConstants.CLEAR_USERS:
      return { ...state, loading: false, error: null, data: [] };

    default:
      return state;
  }
};
