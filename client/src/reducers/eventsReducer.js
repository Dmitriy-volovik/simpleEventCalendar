import { 
    CREATE_EVENT_DATA,
    FIND_ALL_USER_EVENTS,
    EDIT_EVENT,
    DELETE_EVENT,
    MODIFIED_EVENT,
} from "../actions/types";

export function showAllEventReducer(state = [], action) {
    switch (action.type) {
        case FIND_ALL_USER_EVENTS:
        case EDIT_EVENT:
        case DELETE_EVENT:
            return action.payload.events;
        case CREATE_EVENT_DATA:
            return [...state, action.payload.event];

        default:
            return state;
    }
}

export function modifiedEventReducer(state = [], action) {
    switch (action.type) {
        case MODIFIED_EVENT:
            return action.payload.events;
        default:
            return state;
    }
}