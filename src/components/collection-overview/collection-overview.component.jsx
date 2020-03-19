import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);