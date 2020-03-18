import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Producto</span>
            </div>
            <div className='header-block'>
                <span>Descripción</span>
            </div>
            <div className='header-block'>
                <span>Cantidad</span>
            </div>
            <div className='header-block'>
                <span>Precio</span>
            </div>
            <div className='header-block'>
                <span>Eliminar</span>
            </div>
        </div>
        {
            cartItems.map( cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )    
        }
        <div className='total'>
            <span>TOTAL: ARS${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({ //give us state as parameter
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);