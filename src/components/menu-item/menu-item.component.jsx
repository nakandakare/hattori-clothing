import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => ( //match e history viene del react-router porque exporto con withRouter().
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

export default withRouter(MenuItem);