import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStart} from '../../redux/shop/shop.action';
import { selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component { 

    componentDidMount() {
        const { fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
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
    isCollectionsFetching: selectIsCollectionFetching(state), //it's can be simplified with container-pattern.
    isCollectionsLoaded: selectIsCollectionsLoaded(state)
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())  
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);