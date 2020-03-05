import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>GORRAS</h1>
                    <span className='subtitle'>VER</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CAMPERAS</h1>
                    <span className='subtitle'>VER</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>ZAPATILLAS</h1>
                    <span className='subtitle'>VER</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>VER</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MANS</h1>
                    <span className='subtitle'>VER</span>
                </div>
            </div>

        </div>
    </div>
);

export default HomePage;