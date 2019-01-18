import { combineReducers } from "redux";
import { personsReducer, LoggedInUserReducer } from "./personsReducer";
import { showAllEventReducer, modifiedEventReducer } from "./eventsReducer";
const rootReducer = combineReducers({
    persons: personsReducer,
    LoggedInUser: LoggedInUserReducer,
    showAllEvent: showAllEventReducer,
    modifiedEvent: modifiedEventReducer,

});

export default rootReducer;