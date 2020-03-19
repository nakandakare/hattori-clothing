import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) /* in app.js our ShopPage is nested in Route and automatically send match,location and history as props*/  => (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} /* match.path is /shop for better practice.*/ component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
)

export default ShopPage;