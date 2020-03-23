import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import { selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component { 

    componentDidMount() {
        const { fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }       

    render() {
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props; /* in app.js our ShopPage is nested in Route and automatically send match,location and history as props*/
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>}/*prop = prop from Route.*/ />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isCollectionsFetching: selectIsCollectionFetching(state),
    isCollectionsLoaded: selectIsCollectionsLoaded(state)
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())  
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);