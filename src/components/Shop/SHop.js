import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './SHop.css';
const SHop = () => {
    const [products,setProducts]=useState ([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddToCart =(product)=>{
        console.log(product);
    }
    return (
        <div className="shop-container">
           
            <div className="product-container">
            
            {
                products.map(product =><Product 
                    product={product}
                    key={product.id}
                 handelAddToCart={handelAddToCart}
                    />)
            }
               
           
            </div>
            <div className="cart-container">
             <h3>   This is Cart</h3>
            </div>
        </div>
    );
};

export default SHop;