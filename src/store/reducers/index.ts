import { combineReducers } from "redux";
import AccountReducer, { IAccountReducerState } from "./account.reducer";
import TestPanelReducer, {ITestPanelReducerState} from "./test-panel.reducer";

export interface IRootReducerState {
    account: IAccountReducerState,
    testPanel: ITestPanelReducerState
}

const rootReducer = combineReducers({
    account: AccountReducer,
    testPanel: TestPanelReducer
});

export default rootReducer;
