import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SINGIN_START,
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SINGIN_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SINGIN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SINGIN_SUCCESS,
    payload: error
});

