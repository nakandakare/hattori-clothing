import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //if state is undefined => state = INITIAL_STATE, else if null => state = null.
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:    
            return state;
    }
}

export default userReducer;