import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropDown = ({ cartItems, history /*history is from withRouter*/, dispatch }) => ( //Ya trae dispatch en el params, por lo tanto no hace falta hacer  mapDispatchToProps 
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className="empty-message">Tu carrito esta vacío</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state/*{cart: {cartItems}}*/) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));