const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    )

    //Del array cartItems anterior, busca el igual y le incrementa 1
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    } else {
        return [
            ...cartItems,
            { ...cartItemToAdd, quantity: 1 }
        ]
    }
}

export default addItemToCart;