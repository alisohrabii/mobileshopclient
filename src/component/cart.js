import React from 'react';
import {ProductContext} from '../context/ProductContext'
import Cartlist from './cartlist';
import Carttotal from './carttotal';
import './cart.css';
    class Cart extends React.Component{
           render(){
           return(
               <ProductContext.Consumer>          
                  {value=>{const {cart}=value;
          alert("car cotext work");
                    if(cart.length>0){
                      alert("car cotext work");
                      console.log(cart);
                      return(
                        <div className="cartpage" >
                        <div className="cartpagelist"   > <Cartlist value={value} /></div>
                         <div className="cartpagetotal">  <Carttotal value={value}/></div>
                     </div>
        )}else{
          alert("okkkkkk");
          return(<div className="cartpage"><div className="cartpagelist"   ><span style={{fontSize:"33px" ,color:"gray"}}>هیچ کالایی در سبد خرید شما موجود نیست</span></div></div>)
        }
       }}
        </ProductContext.Consumer>
         )}} 
         export default Cart;