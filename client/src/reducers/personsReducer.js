import { 
    ADD_USER,
    LOGGED_IN_USER,
    LOG_OUT
} from "../actions/types";

export function personsReducer(state = [], action) {
    switch (action.type) {
        // case "PERSONS_FETCH_DATA_SUCCESS":
        //     return action.payload.persons;
        case ADD_USER:
            return [...state, action.payload.user];
        default:
            return state;
    }
}

export function LoggedInUserReducer(state = { user: { name: 'Anonym'}, isLoggedIn: undefined}, action) {
    switch (action.type) {
        case ADD_USER: 
        case LOGGED_IN_USER:
            return { user: action.payload.user, isLoggedIn: true}; 
        case LOG_OUT:
            return { user: { name: 'Anonym' }, isLoggedIn: false };
        default:
            return state;
    }
}
