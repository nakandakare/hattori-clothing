import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false //to show spinner.
}

const userReducer = (state = INITIAL_STATE, action) => { //if state is undefined => state = INITIAL_STATE, else if null => state = null.
    switch (action.type) {
        case UserActionTypes.SINGIN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isFetching: false,    
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                isFetching: false,   
                error: null
            }
        case UserActionTypes.SINGIN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:  
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isFetching: false,   
                error: action.payload
            }
        case UserActionTypes.EMAIL_SINGIN_START:
        case UserActionTypes.GOOGLE_SINGIN_START:
        case UserActionTypes.SIGN_UP_START:
            return{
                ...state,
                isFetching: true
            }
        default:    
            return state;
    }
}

export default userReducer;