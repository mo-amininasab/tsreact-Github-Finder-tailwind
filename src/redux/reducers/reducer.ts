import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import userDetailReducer from './userDetailReducer';
import userSummaryReducer from './userSummaryReducer';

const reducer = combineReducers({
  userSummary: userSummaryReducer,
  alert: alertReducer,
  userDetail: userDetailReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
