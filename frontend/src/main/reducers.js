import { combineReducers } from "redux";
import DashBoardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
const rootReducer = combineReducers({
  dashboard: DashBoardReducer,
  tab: TabReducer,
});

export default rootReducer;
