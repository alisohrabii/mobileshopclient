
import React, {useEffect,useContext, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import ProductContextProvider from './context/ProductContext';
 import SetProduct from './component/SetProduct';
import  { AuthContext } from './context/AuthContext';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Axios from 'axios';
import Test from './component/test'
import Listproduct from './component/listproduct';
 const App = () => { 
  const userData=useContext(AuthContext);

useEffect(()=>{
  console.log(`userinfotokennnn${userData.userinfo.token}`);

  
  const checklogedin=async()=>{
  let token=localStorage.getItem("hitoken");
  console.log(token);
  if (token===null){

    console.log('i am here beor 3 ');
localStorage.setItem('hitoken','');
token='';
  }else{
    console.log('i am here beor 2 ');
const restoken=await Axios.post("http://localhost:8088/users/tokenlogin",null,{headers:{"xtoken":`${token}`}});
console.log(restoken);
if(restoken.status==200){
userData.setUserinfo({token,user:restoken.data})
  }else{}

    
  }
}


  checklogedin();

},[])
  return (
  <div>
<div> برای امتحان فونت</div>
      <Navbar />
      <div >

        <Switch>
        
          <Route exact path="/Product"    component={Product} />
         
          <Route exact path="/Login" component={Login} />
          
          <Route exact path="/Test" component={Test} />
          
          <Route exact path="/Register" component={Register} />
             
          <Route exact path="/Setproduct" component={SetProduct} />
                    
          <Route exact path="/Product" component={Product} />
          
        </Switch>
      </div>
    
     
    
  
   
  </div>

     
       
  );
}
export default App;