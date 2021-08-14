import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Get all the logs
export const getLogs = () => async dispatch =>  {
    try {
        // Set Loading to True
        setLoading();
        // Fetch from api
        const res = await fetch('/logs');
        const data = await res.json();
        // Dispatch 
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};