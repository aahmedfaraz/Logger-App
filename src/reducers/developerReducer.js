import { GET_DEVELOPERS, ADD_DEVELOPER, DELETE_DEVELOPER, SET_DEVELOPER_LOADING, DEVELOPER_ERROR, CLEAR_DEVELOPER_ERROR } from "../actions/types";

const initialState = {
    developers: null,
    loading: false,
    error: null
}

const developerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEVELOPERS:
            return {
                ...state,
                developers: action.payload,
                loading: false,
            }
        case ADD_DEVELOPER:
            return {
                ...state,
                developers: [...state.developers, action.payload],
                loading: false,
            }
        case DELETE_DEVELOPER:
            return {
                ...state,
                developers: state.developers.filter(developer => developer.id !== action.payload),
                loading: false,
            }
        case SET_DEVELOPER_LOADING:
            return {
                ...state,
                loading: true
            }
        case DEVELOPER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case CLEAR_DEVELOPER_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default developerReducer;