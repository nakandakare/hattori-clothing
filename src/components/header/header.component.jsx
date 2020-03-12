import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/samurai.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser //user = root-reducer , currentUser = user-reducer.
})

export default connect(mapStateToProps)(Header); //give us back another header component with reducer state.