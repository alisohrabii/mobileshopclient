import React from 'react';
import {ProductContext} from '../context/ProductContext'
import Cartlist from './cartlist';
import Carttotal from './carttotal';
    class Cart extends React.Component{
           render(){
        alert("Cart work");
           return(
        
               <ProductContext.Consumer>          
                  {value=>{const {cart}=value;
                  alert("car cotext work");
                    if(cart.length>0){return(
                        <div className="cart">
                        <div className="container">
                           <div className="row">
                        <div className="col-12 col-md-8"  > <Cartlist value={value} /></div>
                         <div className="col-12 col-md-4">  <Carttotal value={value}/></div>
                        
                           </div>
                           </div>
                        
                     </div>
        )}
       }}
        </ProductContext.Consumer>
         )}} 
         export default Cart;