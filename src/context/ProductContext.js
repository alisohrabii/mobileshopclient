import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import useStateWithCallback, { useStateWithCallbackInstant, useStateWithCallbackLazy } from 'use-state-with-callback';
export const ProductContext = createContext();

const  ProductContextProvider = (props) => {
  
  const [product,setProduct] = useState([]);

  const [errmssage,setErrMssage] = useState('');

  const [producttype,setProducttype] = useState([]);



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

  /*
  console.log(producttype);
  const tryfetch=async()=>{
    try{ const data={
         type:producttype};
         console.log(data);
    const registerAction=await Axios.post("http://localhost:8088/product/Getproductbyname",data);
    console.log(registerAction.data.product);

         }catch(err){
if(err.response){
        
console.error(err.response.data.mss);

setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد')} 

}//endcatch


 
}// end const tryfetch

tryfetch();
*/
console.log(`productcontext is ${product}`);
},[])
 




  return (
    <ProductContext.Provider value={{product,producttype,settype}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default  ProductContextProvider;
