import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//change shopData object to array
export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

//return the same collection item of URL param
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
                    /*collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])*/
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //if null return false otherwise true
)

