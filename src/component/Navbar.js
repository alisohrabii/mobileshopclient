import React,{useEffect,useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';
import Search from './Search.js';
import { ProductContext } from '../context/ProductContext';
import userphoto from '../images/user2.svg';
import cartphoto from '../images/bag3.svg';
import usertickphoto from '../images/usertick2.svg';
import Listproduct from './listproduct'
import Menu from './Menu';
import {Link} from 'react-router-dom';
import Navdown from './Navdown';
const Navbar = () => {
    const {userinfo}=useContext(AuthContext);
    const {cart}=useContext(ProductContext);
   
    useEffect(()=>{
    


    },[])
    return (
        <div>
        <div className="navbar">
            <div className='logo'>logo</div>
            <Search />
        
            <Menu/>
            {userinfo.user?(<div className="login-register" >
               
               <img src={usertickphoto} width='30px'/>
               <span> {userinfo.user.username}</span>

           </div>):(
            <div className="login-register" >
               
                <img src={userphoto} width='30px'/>
                <span>وارد شوید</span>

            </div>
            )}
            <div className="cart">
             {cart.length!==0?(<span className='numbercart'>{cart.length}</span>):(null)}
                <img src={cartphoto} width='30px'/>
              <Link  to="/Cart"> <span className="cart-span" >سبد خرید</span></Link> 
           </div>
        </div>
        <Navdown/>
        </div>
    );
};

export default Navbar;