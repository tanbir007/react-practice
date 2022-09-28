import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    //console.log(props.product);
    //const {handelAddToCart}=props
    
    //console.log(props.handelAddToCart);
    const {id,img,name,category,price,ratings,seller,stock}=props.product
    return (
        <div className='product'>
            
    

           <img  src={img} alt=""/>
           <div className="product-info">
           <h4>{name}</h4>
           <p>${price}</p>
           <p>{seller}</p>
           <p>rating:{ratings}</p>
          
           </div>
           <button onClick={()=>props.handelAddToCart(props.product)} className="btn-cart" >
           
           <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart

            </button>
        </div>
    );
};

export default Product;