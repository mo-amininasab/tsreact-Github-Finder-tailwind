import { UserDetailAction } from '../actions/userDetailActions';
import {
  userDetailConstants,
  UserDetailJSONTypes,
} from '../constants/userDetailConstants';

interface userDetailState {
  loading: boolean;
  error: string | null;
  data: UserDetailJSONTypes | {};
}

const initialState: Readonly<userDetailState> = {
  loading: false,
  error: null,
  data: {},
};

export default (
  state = initialState,
  action: UserDetailAction
): userDetailState => {
  switch (action.type) {
    case userDetailConstants.GET_USER:
      return { ...state, loading: true, error: null };

    case userDetailConstants.GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case userDetailConstants.GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload, data: {} };

    default:
      return state;
  }
};
