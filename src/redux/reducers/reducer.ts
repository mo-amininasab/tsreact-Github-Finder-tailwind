import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userSummaryReducer from "./userSummaryReducer";

const reducer = combineReducers({
  userSummary: userSummaryReducer,
  alert: alertReducer,
})

export default reducer;

export type RootState = ReturnType<typeof reducer>;