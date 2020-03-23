import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //if state is undefined => state = INITIAL_STATE, else if null => state = null.
    switch (action.type) {
        case UserActionTypes.SINGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,    
                error: null
            }
        case UserActionTypes.SINGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:    
            return state;
    }
}

export default userReducer;