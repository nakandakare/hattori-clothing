import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types'; 
import { auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess} from './user.actions';

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get(); //si no hago yield, no va a pausar la funcion entonces va a dar null
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        )
    }catch(error){
        yield put(signInFailure(error))
    }
}

//WATCHERS
export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SINGIN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SINGIN_START, signInWithEmail)
}

export function* userSagas(){ //to export all functions.
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}