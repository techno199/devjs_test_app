import { REQUEST_STUDIOS, RECIEVE_STUDIOS } from "../actons";

export function studiosReducer(
    state = {
        studios: [],
        isFetching: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_STUDIOS: {
            return {
                ...state,
                isFetching: true
            }
        }
        case RECIEVE_STUDIOS: {
            return {
                ...state,
                studios: action.studios,
                isFetching: false
            }
        }
        default: {
            return state;
        }
    }
    
}