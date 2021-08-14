import { GET_LOGS, ADD_LOG, UPDATE_LOG, DELETE_LOG, SEARCH_LOGS, SET_CURRENT, CLEAR_CURRENT, SET_LOADING, LOGS_ERROR, CLEAR_LOG_ERROR } from './types';

// Action to get all the logs
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

// Action to add a log
export const addLog = (log) => async dispatch =>  {
    try {
        // Set Loading to True
        setLoading();
        // Post to api
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // Dispatch 
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to update log
export const updateLog = (log) => async dispatch =>  {
    try {
        // Set Loading to True
        setLoading();
        // Post to api
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // Dispatch 
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
        clearCurrent();
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to delete log
export const deleteLog = (id) => async dispatch =>  {
    try {
        // Set Loading to True
        setLoading();
        // Post to api
        await fetch(`/logs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Dispatch 
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to Search logs
export const searchLogs = text => async dispatch => {
    try {
        // Set Loading to True
        setLoading();
        // Fetch from api
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        // Dispatch 
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to set current 
export const setCurrent = log => ({
    type: SET_CURRENT,
    payload: log
})

// Action to clear current 
export const clearCurrent = log => ({
    type: CLEAR_CURRENT
})

// Set Loading to True
export const setLoading = () => ({
    type: SET_LOADING
})

// Action to clear error
export const clearLogError = () => ({
    type: CLEAR_LOG_ERROR
})