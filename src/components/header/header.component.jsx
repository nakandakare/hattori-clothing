import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/samurai.svg';
import { connect } from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, signOutStart}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <div>
                {
                    currentUser ?
                        <div className='option' onClick={signOutStart}>SALIR</div>
                        :
                        <Link className='option' to='/signin'>INGRESAR</Link>
                }
            </div>
            <CartIcon />
            <div>
                {
                    currentUser ?
                        <div>{currentUser.displayName}</div>
                        :
                        null
                }
            </div>
        </div>
        { hidden ? null : <CartDropDown />}
    </div>
);

const mapStateToProps = (state /*{ user: { currentUser }, cart: { hidden } }*/) => ({ //here we can use structuredSelector
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header); //give us back another header component with reducer state.