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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => { //template function to add new collection to firebase.
    const collectionRef = firestore.collection(collectionKey); //collection key create automatically when we set item on it
    
    const batch = firestore.batch();

    objectToAdd.forEach(obj => { //forEach dont return array as .map()
        const newDocRef = collectionRef.doc(); //randomy generate id.
        batch.set(newDocRef, obj);
    })

    return await batch.commit(); //if batch succeed or error
}

export const convertCollectionSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map( doc => {
        const {title, items, titleEsp} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
            titleEsp
        }
    }
    );

    return transformedCollection.reduce((accumulator, collection) => { //changing array to object.
        accumulator[collection.routeName.toLowerCase()] = collection; // key = collection IS key : collection
        return accumulator;
    },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; //in case i need all firebase library.