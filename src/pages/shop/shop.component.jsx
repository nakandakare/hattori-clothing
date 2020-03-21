import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { updateCollections} from '../../redux/shop/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component { 

    state = {
        loading: true
    };

    unsubsucribeFromSnapshot = null;

    //getting collection from firebase database and transoforming to array.
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => { // get data from collection firebase.
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
            }
        )
    }       

    render() {
        const { match } = this.props; /* in app.js our ShopPage is nested in Route and automatically send match,location and history as props*/
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/* match.path is /shop for better practice.*/ />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))      
})

export default connect(null,mapDispatchToProps)(ShopPage);