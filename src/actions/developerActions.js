import { GET_DEVELOPERS, ADD_DEVELOPER, DELETE_DEVELOPER, SET_DEVELOPER_LOADING,DEVELOPER_ERROR, CLEAR_DEVELOPER_ERROR } from "./types";

// Action to get all developers
export const getDevelopers = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/developers');
        const data = await res.json();
        dispatch({
            type: GET_DEVELOPERS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: err.response.data
        })
    }
}

// Action to add developer
export const addDeveloper = (developer) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/developers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(developer)
        });
        const data = await res.json();
        dispatch({
            type: ADD_DEVELOPER,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: err.response.data
        })
    }
}

// Action to delete developer
export const deleteDeveloper = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/developers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch({
            type: DELETE_DEVELOPER,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: err.response.data
        })
    }
}

// Action to set developer loading
export const setLoading = () => ({
    type: SET_DEVELOPER_LOADING
})

// Action to clear error
export const clearDeveloperError = () => ({
    type: CLEAR_DEVELOPER_ERROR
})