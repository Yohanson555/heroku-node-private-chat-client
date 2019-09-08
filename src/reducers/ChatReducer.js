import {
    Types
} from '../actions';

const INITIAL_STATE = {
    messages: [],
    
    error: null,
    success: null,
    warning: null,
    info: null,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.SEND_ERROR_MESSAGE: 
            return {
                ...state,
                error: action.payload
            };
        default: return state;
    }
};
