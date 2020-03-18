import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/samurai.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
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
            <CartIcon />
        </div>
        { hidden ? null : <CartDropDown />}
    </div>
);

const mapStateToProps = (state /*{ user: { currentUser }, cart: { hidden } }*/) => ({ //here we can use structuredSelector
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps)(Header); //give us back another header component with reducer state.