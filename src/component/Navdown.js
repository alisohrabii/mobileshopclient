import React from 'react';
import Listproduct from './listproduct';
import beautyphoto from '../images/beauty.svg';
import tabletphoto from '../images/tablet.svg';
import dishphoto from '../images/dish.svg';
import gamepadphoto from '../images/gamepad.svg';
import discountphoto from '../images/discount.svg';
import tshirtphoto from '../images/tshirt.svg';
import './navdown.css';

const navdown = () => {
    return (<div>
        <div className='navdown-con nnj '>
         <div id="furn" className='items2'><div to="/login" className="links2" ><img style={{width:"25px"}} src={dishphoto}/>
         <span className="m-2">لوازم خانگی</span>
         </div>
            

         <div id="furnsub" className='container-sub' ><Listproduct type='لوازم خانگی'/></div>
         
         </div>


        


         <div id="digi" className="items2"><div to="/login" className="links2  " ><img style={{width:"25px"}} src={tabletphoto}/>
         <span className="m-2">کالا های دیجیتال</span>
         </div>
         <div id="digisub" className='container-sub' ><Listproduct type='کالاهای دیجیتال'/></div>
         </div>

         
        <div id="beaut" className="items"><div to="/login" className="links2" ><img style={{width:"25px"}} src={beautyphoto}/>
         <span className="m-2">لوازم آرایشی</span>
         </div>      
         <div id="beautsub" className='container-sub' ><Listproduct type='لوازم آرایشی'/></div>
         </div>


         <div id='mod' className="items2"><div to="/login" className="links2" ><img style={{width:"25px"}} src={tshirtphoto}/>
         <span className="m-2">مد و پوشاک</span>
         </div>
         <div id='modsub' className='container-sub'  ><Listproduct type='مد وپوشاک'/></div>
         </div> 

       



         <div id='game' className="items2"><div to="/login"  className="links2"><img style={{width:"25px"}} src={gamepadphoto}/>
         <span className="m-2">بازی و سرگرمی</span>
         </div>
         <div id='gamesub' className='container-sub' ><Listproduct type='بازی وسرگرمی'/></div>
         </div>
         


         <div className="items2"><div to="/login" className="links2"><img style={{width:"25px"}} src={discountphoto}/>
         <span className="m-2">پیشنهاد ویژه</span>
         </div></div>

          </div>
          
         
        </div>
    );
};

export default navdown;