import {takeLatest,call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.action';

export function* fetchCollectionsAsync() { //and yield makes easy to test with .next()

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get() //similar to async await.
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot); // function, parameter 
        //put = dispatch()
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
        /*collectionRef.get().then(snapshot => { // get data from collection firebase. (async)
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)))*/
}

//WATCHER
export function* fetchCollectionsStart(){
    yield takeLatest( //call non blocking call, if there is another takeEvery running in the app , can cancel previous one bcs of yield. 
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
        );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}