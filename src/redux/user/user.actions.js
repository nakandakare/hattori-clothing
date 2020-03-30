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
    type: UserActionTypes.SINGIN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type:UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: emailAndPassword
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})
