import {all, call} from 'redux-saga/effects';

import {fetchCollectionsStart} from './shop/shop.saga';
import {userSagas} from './user/user.saga';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSagas)]); //all is for run multiple gen functions concurrencially
}