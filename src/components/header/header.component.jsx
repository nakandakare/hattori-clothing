import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/samurai.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            <div>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SALIR</div>
                    :
                    <Link className='option' to='signin'>INGRESAR</Link> 
                }
            </div>
        </div>
    </div>
);

export default Header;