import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart);
 let total = 0
let shipping =0
let quantity = 0

    for(const product of props.cart){
        quantity =quantity + product.quantity
        console.log(quantity);
        total = total + product.price*product.quantity
        //console.log(product.shipping);
        
  shipping =shipping+ product.shipping
 //console.log(shipping);
    }

    const tax= parseFloat((total*0.1).toFixed(2))
    const grandTotal=total+shipping+tax
    return (
        <div className="cart">
             <h3>   This is Cart </h3>
             <p>selected items: {quantity}</p>
             <p>Total price: ${total}</p>
             <p>Total Shipping: ${shipping}</p>
             <p>Tax: ${tax}</p>
             <strong><p>Grand Total: ${grandTotal}</p></strong>
        </div>
    );
};

export default Cart;