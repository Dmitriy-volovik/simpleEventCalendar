import { 
    ADD_USER,
    LOGGED_IN_USER,
    LOG_OUT
} from './types'



export function personsFetchDataSuccess(persons) {
    return {
        type: "PERSONS_FETCH_DATA_SUCCESS",
        payload: { persons }
    }
}

export function createUserAction(user) {
    return {
        type: ADD_USER,
        payload: { user }
    }
}

export function checkUserDataAction(user) {
    return {
        type: LOGGED_IN_USER,
        payload: { user }
    }
}

export function logOutAction() {
    return {
        type: LOG_OUT
    }
}


export function personsFetchData(url) {
    return async(dispatch) => {
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(personsFetchDataSuccess(persons)))
    }
}


export function createUserData(url, data) {
    return async(dispatch) =>{
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
            .then(user => dispatch(createUserAction(user)))
    }
}

export function checkUserData(url, data) {
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
                // console.log(`eto user,  ${response}`);
                console.log(response);
                return response.json();
            })
            .then(user => dispatch(checkUserDataAction(user)))
    }
}

