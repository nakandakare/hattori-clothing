import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) => ( //match and history react-router withRouter.
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image' 
            style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>VER</span>
        </div>
    </div>
);

export default withRouter(MenuItem); //withRouter Sirve para reemplazar al <Route> </Route> asi se puede utilizar history.push.