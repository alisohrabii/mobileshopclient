import React,{createRef,useRef,useState} from 'react';
import Menuitem from './Menuitem';
import './menu.css';

const Menu = (props) => {
  
   
const myref=useRef(null);
  const handleshow=()=>{
    myref.current.handlemenuitem();
      }

    return (
        <div>
            
   
   <div className="menu-main">
    <div className=" menu-menuicon" onClick={handleshow}><img style={{width:"35px"}}src="immagge/menu200.svg"/></div>
    <Menuitem ref={myref} />
    </div>
            
        </div>
    );
};

export default Menu;

