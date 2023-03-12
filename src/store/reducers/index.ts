import { combineReducers } from "redux";
import AccountReducer, { IAccountReducerState } from "./account.reducer";
import TestPanelReducer, {ITestPanelReducerState} from "./test-panel.reducer";
import artistDetailsReducer from "./artist.reducer";
export interface IRootReducerState {
    account: IAccountReducerState,
    testPanel: ITestPanelReducerState,
    artistDetails:any,
}

const rootReducer = combineReducers({
    account: AccountReducer,
    testPanel: TestPanelReducer,
    artistDetails:artistDetailsReducer
});

export default rootReducer;
