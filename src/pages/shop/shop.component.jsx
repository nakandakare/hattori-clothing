import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component { 

    /* getting collection from firebase database and transoforming to array.
    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log(collectionsMap);
        }
        )
    } */ 

    render() {
        const { match } = this.props; /* in app.js our ShopPage is nested in Route and automatically send match,location and history as props*/
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} /* match.path is /shop for better practice.*/ component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

export default ShopPage;