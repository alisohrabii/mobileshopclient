import React, { createContext,useEffect, useState } from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

import useStateWithCallback, { useStateWithCallbackInstant, useStateWithCallbackLazy } from 'use-state-with-callback';
export const ProductContext = createContext();

const  ProductContextProvider = (props) => {
  
  const [product,setProduct] = useState([]);

  const [cart,setCart] = useState([]);
  const [Paytotprice,setPaytotprice] = useState('');
  const [num,setNum] = useState(0);

  const [errmssage,setErrMssage] = useState('');

  const [producttype,setProducttype] = useState([]);


  const nextcart=(item)=>{
    alert('nextcart');
    console.log(item);
     
      
    const tryfetch=async()=>{
      try{ 
        const data={
    
           userinfo:item,
           cart:cart
          };
           console.log(data);
      const CartsetAction=await Axios.post("http://localhost:8088/users/setcart",data);
      if(CartsetAction.status==200){
        alert('hello there');
         props.history.push('/cart2');

      }
    
    }catch(err){
    if(err.response){
      setErrMssage(err.response.data.mss);
    }else{setErrMssage('ارتباط با سرور قطع میباشد')} 
    }//endcatch
    
    
    
    }// end const tryfetch
    
    tryfetch();
       }
    
    
    
    
                 
                
            


  const addtocart=(item,color)=>{
    let A={...item};
   // var A = Object.create(item);
    
    A.colorselected=color;
    
    setCart(cart => [...cart, A]);
  
  
 
  }
  const addcount=(id,color,existnum)=>{

let tempcart=[...cart];
         const selectedproduct=tempcart.find(item=>item.id===id&&item.colorselected==color);
          const index = tempcart.indexOf(selectedproduct);
          if( selectedproduct.count<=existnum){
          selectedproduct.count=selectedproduct.count+1;
         selectedproduct.total=selectedproduct.count*selectedproduct.price;
    tempcart[index]=selectedproduct;
      setCart([...tempcart]);
          }else{
            setErrMssage("فقط همین تعداد در انبار موجود میباشد")
            setTimeout(function(){ setErrMssage("") }, 3000);
          
          }

  }
    const subcount=(id,color)=>{

      let tempcart=[...cart];
           const selectedproduct=tempcart.find(item=>item.id===id&&item.colorselected===color);
            const index = tempcart.indexOf(selectedproduct);
            if( selectedproduct.count >= 2){
            selectedproduct.count=selectedproduct.count-1;
           selectedproduct.total=selectedproduct.count*selectedproduct.price;
      tempcart[index]=selectedproduct;
        setCart([...tempcart]);
            }




    }
      const removeitem=(id)=>{
        alert("hiiih")
let tempcart=[...cart];
let newtempcart=tempcart.filter(item=>item.id!==id);
setCart([...newtempcart]);



      }

  const settype=(item)=>{
    
  
  const tryfetch=async()=>{
    try{ const data={
         type:item};
         
    const registerAction=await Axios.post("http://localhost:8088/product/Getproductbyname",data);
    console.log(registerAction.data.product);
const aee=[{name:"ali",lastname:"sohrabi"},{name:"ajh",lastname:"srabi"}];
 

setProduct(registerAction.data.product);
   

}catch(err){
if(err.response){
        
console.error(err.response.data.mss);

setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد')} 

}//endcatch


 
}// end const tryfetch

tryfetch();

}

useEffect(()=>{


},[])
 




  return (
    <ProductContext.Provider value={{product,producttype,nextcart,errmssage,cart, setPaytotprice,Paytotprice,addcount,subcount,removeitem,settype,addtocart}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default withRouter(ProductContextProvider);
