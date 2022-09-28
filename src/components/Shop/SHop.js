import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './SHop.css';

const SHop = () => {
    const [products,setProducts]=useState ([]);
    const [cart,setCart]=useState ([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
//     useEffect(() =>{
//         const storedCart= getStoredCart();
//         console.log(storedCart);
//         for(const id in storedCart){
//             const addededProducts=products.find(pd=>pd.id===id)
//             console.log(addededProducts);
//         }
//     },[products])
    const handelAddToCart =(product)=>{
        let newCart=[];
      const exist = cart.find(pd=>pd.id===product.id)
      if(!exist){
        product.quantity=1
        newCart=[...cart,product]
      }
      else{
        const rest =cart.filter(pd=>pd.id!==product.id)
        product.quantity= product.quantity + 1
        newCart=[...rest,exist]
      }
       
        setCart(newCart)
   addToDb(product.id)
    }

useEffect(()=>{
    const storedCart= getStoredCart()
    const savedCart=[]; //This is totally new array thats why we push
for(const id in storedCart){
    const addedProduct =products.find(product=>product.id===id)
    if(addedProduct){
        const quantity =storedCart[id]
        addedProduct.quantity=quantity
        savedCart.push(addedProduct)
    }
    setCart(savedCart)
}
},[products])
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
            <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default SHop;