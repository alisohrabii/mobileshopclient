
    import React from 'react';
   import Listproduct from './listproduct';
    import {Link} from 'react-router-dom';
    import bellphoto from '../images/bell.svg';
import cartphoto from '../images/cart9.svg';
import listphoto from '../images/aboutus2.svg';
import contactphoto from '../images/headset.svg';
import beautyphoto from '../images/beauty.svg';
import tabletphoto from '../images/tablet.svg';
import dishphoto from '../images/dish.svg';
import gamepadphoto from '../images/gamepad.svg';
import discountphoto from '../images/discount.svg';
import rulerphoto from '../images/ruler.svg';
import tshirtphoto from '../images/tshirt.svg';


    import './menu.css';
import { AuthContext } from '../context/AuthContext';
    class Menuitem extends React.Component {
        constructor (props){
        super (props);
           this.myref2= React.createRef();
              this.myref3= React.createRef();
         
        this.state={submenushow:false}}
    
        handleclick=(item)=>{
             const elem=document.getElementsByClassName(item);
          //console.log(imgphoto);
         if( elem[0].style.display=='none'){elem[0].style.display='block';
         //imgphoto[0].src=minusphoto;

        }else{
         // imgphoto[0].src=plusephoto;
          elem[0].style.display='none';
        };
        }
        handlemenuitem=()=>{
        
        const elem=this.myref2.current;
        elem.style.right="0";
        }
        
        closemenu=()=>{
       let elem=this.myref2.current;
       elem.style.right="-100%";
        }
        render() {
        
        
        const submenu=this.state.submenushow;
        return (
        <div ref={this.myref2} className="menuitems">
        <div onClick={this.closemenu}><img style={{width:"33px"}} src="../images/closemenu.svg"/></div>
          <div className=" menuitemsheader"  > <img src="../images/logo.svg" style={{width:"106px"}}/></div>
        <div className="items-con">
        
    


        <div className="items"><div to="/login" className="links" onClick={()=>this.handleclick('furnture')}><img style={{width:"25px"}} src={dishphoto}/>
         <span className="m-2">لوازم خانگی</span>
         </div></div>
         
         <div className="furnture submenu" style={{display:"none"}}><Listproduct type='لوازم خانگی'/></div>
         


        


         <div className="items"><div to="/login" className="links " onClick={()=>this.handleclick('digi')}><img style={{width:"25px"}} src={tabletphoto}/>
         <span className="m-2">کالا های دیجیتال</span>
         </div></div>
         <div className="digi submenu" style={{display:"none"}}><Listproduct type='کالاهای دیجیتال'/></div>
         
         <div className="items"><div to="/login" className="links" onClick={()=>this.handleclick('beauty')}><img style={{width:"25px"}} src={beautyphoto}/>
         <span className="m-2">لوازم آرایشی</span>
         </div></div>
         
         <div className="beauty submenu" style={{display:"none"}}><Listproduct type='لوازم آرایشی'/></div>
         



         <div className="items"><div to="/login" className="links" onClick={()=>this.handleclick('cloths')}><img style={{width:"25px"}} src={tshirtphoto}/>
         <span className="m-2">مد و پوشاک</span>
         </div></div>
         <div className="cloths submenu" style={{display:"none"}}><Listproduct type='مد وپوشاک'/></div>
         

         <div className="items"><div to="/login" onClick={()=>this.handleclick('gaming')} className="links"><img style={{width:"25px"}} src={gamepadphoto}/>
         <span className="m-2">بازی و سرگرمی</span>
         </div></div>
         
         <div className="gaming submenu" style={{display:"none"}}><Listproduct type='بازی وسرگرمی'/></div>
         


         <div className="items"><div to="/login" className="links"><img style={{width:"25px"}} src={discountphoto}/>
         <span className="m-2">پیشنهاد ویژه</span>
         </div></div>

         <div className='borderb'></div>
        
        <div className="items "><Link to="/cart" className='links'><img style={{width:"25px"}} src={cartphoto}/>   <span>
        سبد خرید
        </span></Link></div>
        <div className="items"><Link to="/contact" className="links"><img style={{width:"25px"}} src={contactphoto}/>      <span >
         ارتباط با ما
        </span></Link></div>
        <div className="items "><Link to="/aboutus" className="links"><img style={{width:"25px"}} src={listphoto}/>        <span className="mr-2">
      سوالات متداول
        </span></Link></div>

         <div className="items"><Link to="/login" className="links"><img style={{width:"25px"}} src={bellphoto}/>
         <span className="m-2">پیشنهادها</span>
         </Link></div>





        </div>
        
    
        </div>
        );
        }}
        export default Menuitem;