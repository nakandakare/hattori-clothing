import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_7bH24J4RspqEss2bGKIgrhOR00E66Ek9kC';

    const onToken = (token) => { //backend will receive this token.
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
        currency="ARS"
        label="Pagar ahora" 
        name="Hattori Clothing"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/dd9583d0d5'
        description={`Total a pagar es ARS${price}`}
        amout={price}
        panelLabe='Pagar ahora'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;