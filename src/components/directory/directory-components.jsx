import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import './directory.styles.scss'
import { selectSections} from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} /> //title={title} imageUrl={imageUrl} size={size}
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    sections: selectSections(state)
})

export default connect(mapStateToProps)(Directory);