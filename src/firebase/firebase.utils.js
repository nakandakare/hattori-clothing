import firebase from 'firebase/app';
import 'firebase/firestore'; //attach to firebase variable.
import 'firebase/auth'; //attach to firebase variable.

const config = {
    apiKey: "AIzaSyCOl8X635UiH26YDRhHLyQYn-BJHtCc27E",
    authDomain: "hattori-db.firebaseapp.com",
    databaseURL: "https://hattori-db.firebaseio.com",
    projectId: "hattori-db",
    storageBucket: "hattori-db.appspot.com",
    messagingSenderId: "448071144188",
    appId: "1:448071144188:web:876a89d7e9239f56dcbd79"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; //in case i need all firebase library.