import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 5) / 100;

    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Cart Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping:$ {shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

        </div>
    );
}; 

export default Cart;