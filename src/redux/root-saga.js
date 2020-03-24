import {all, call} from 'redux-saga/effects';

import {shopSagas} from './shop/shop.saga';
import {userSagas} from './user/user.saga';
import {cartSagas} from './cart/cart.saga';

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]); //all is for run multiple gen functions concurrencially
}