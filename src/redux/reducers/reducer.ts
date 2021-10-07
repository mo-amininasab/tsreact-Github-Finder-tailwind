import { combineReducers } from "redux";
import userSummaryReducer from "./userSummaryReducer";

const reducer = combineReducers({
  userSummary: userSummaryReducer,
})

export default reducer;

export type RootState = ReturnType<typeof reducer>;