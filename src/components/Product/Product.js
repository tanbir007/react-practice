import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const {id,img,name,category,price,ratings,seller,stock}=props.product
    return (
        <div className='product'>
            
           <div className="">
           <img  src={img} alt=""/>
           <h4>{name}</h4>
           <p>{price}</p>
           <p>{seller}</p>
           <p>rating:{ratings}</p>
           <button >Add to cart</button>
           </div>
          
        </div>
    );
};

export default Product;