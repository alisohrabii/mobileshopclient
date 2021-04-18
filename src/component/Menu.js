import React,{createRef,useRef,useState} from 'react';
import Menuitem from './Menuitem';
import './menu.css';
import { MenuIcon } from '../util/Icons';

const Menu = (props) => {
  
  
const myref=useRef(null);
  const handleshow=()=>{
    const elem=document.getElementById('menuitems');
    elem.style.right="0";
      }
      const handlClose=()=>{
        const elem=document.getElementById('menuitems');
        elem.style.right="-100%";

      }

    return (
        <div>
            
   
   <div className="menu-main">
    <div className=" menu-menuicon" onClick={handleshow}><MenuIcon width="25px" color="rgb(33,33,33)"/> </div>
    <div id='menuitems'>
    <Menuitem  handleParentClose={handlClose} />
    </div>
    </div>
            
        </div>
    );
};

export default Menu;

