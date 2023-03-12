import {IActionModel} from "../../shared/models/action.model";
import {SET_ARTIST_DETAILS} from "../actions/artist.action";

const INITIAL_STATE: any = {
    artistDetails: {}
};

const artistDetailsReducer = (state: any = INITIAL_STATE, action: IActionModel): any => {
    switch (action.type) {
        case SET_ARTIST_DETAILS:
            return {
                ...state,
                artistDetails: action.payload,
            };
        default:
            return state;
    }
}
export default artistDetailsReducer;