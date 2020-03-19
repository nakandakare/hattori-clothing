import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import { selectCollection} from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) /*match is Route library object.*/ => {
    return(
    <div className='collection-page'>
        <h2>SADSASDS</h2>
    </div>
    )
}

const mapStateToProps = (state, ownProps) /*ownProps = url params*/ => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);