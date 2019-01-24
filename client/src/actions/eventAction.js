import { 
    CREATE_EVENT_DATA,
    FIND_ALL_USER_EVENTS,
    EDIT_EVENT,
    DELETE_EVENT,
    MODIFIED_EVENT
} from './types'

export function createEventDataSuccess(event) {
    return {
        type: CREATE_EVENT_DATA,
        payload: { event }
    }
}

export function findAllUserEventsSuccess(events) {
    return {
        type: FIND_ALL_USER_EVENTS,
        payload: { events }
    }
}

export function updateEventDataSuccess(events) {
    return {
        type: EDIT_EVENT,
        payload: {events}
    }
}

export function deleteEventDataSuccess(events) {
    return {
        type: DELETE_EVENT,
        payload: { events }
    }
}

export function saveModifiedEvents(events) {
    return {
        type: MODIFIED_EVENT,
        payload: { events }
    }
}

export function createEventData(url, data) {
    return async (dispatch) => {
        let reqBody = {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }
        await fetch(url, reqBody)
            .then(response => {
                return response.json();
            })
            .then(event => dispatch(createEventDataSuccess(event)))
    }
}

export function updateEventData(url , data) {
    return async (dispatch) =>{
        let reqBody = {
            method: "put",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }
        await fetch(url, reqBody)
            .then(response => {
                return response.json();
            })
            .then(event => dispatch(updateEventDataSuccess(event)))
    }
}

export function deleteEventData(url, id) {
    return async (dispatch) => {
        let reqBody = {
            method: "delete",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)

        }
        await fetch(url, reqBody)
            .then(response => {
                return response.json();
            })
            .then(events => dispatch(deleteEventDataSuccess(events)))
    }
}

export function findAllUserEvents(url, data) {
    return async (dispatch) => {
        let reqBody = {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }
        await fetch(url, reqBody)
            .then(response => {
                return response.json();
            })
            .then(events => dispatch(findAllUserEventsSuccess(events)))
    }
}
