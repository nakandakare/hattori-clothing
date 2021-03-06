import ShopActionTypes  from './shop.types';
import {firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


//this code is mean to be in saga becausae it async.
export const fetchCollectionsStartAsync = () => { //thunk middleware = allow us dispatch.
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => { // get data from collection firebase. (async)
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);    
            dispatch(fetchCollectionsSuccess(collectionsMap))
            }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}