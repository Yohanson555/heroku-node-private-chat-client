import {
    Types
} from '../actions';

const INITIAL_STATE = {
    logo: null
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case Types.SET_PROPERTY: 
            if ("prop" in payload && "value" in payload) {
                return {
                    ...state,
                    [payload.prop]: payload.value
                }
            } else {
                return state;
            }
        default: return state;
    }
};
