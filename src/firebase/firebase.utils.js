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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); //QueryReference to database.
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData //displayName
            })
        }catch(e){
            console.log('Error al crear usuario', e.message);
        }
    }

    return userRef;
}

/*export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map( doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    }
    );

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.routeName.toLowerCase()] = collection;
        return accumulator;
    },{})
}*/

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; //in case i need all firebase library.