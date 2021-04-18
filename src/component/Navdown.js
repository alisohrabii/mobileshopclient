import React,{useContext} from 'react';
import {ProductContext} from '../context/ProductContext'


import {withRouter} from 'react-router-dom';
import {DiscountIcon2,HuawieIcon,AppleIcon,SumsungIcon,XaiomiIcon,HtcIcon,LgIcon} from '../util/Icons';
import './navdown.css';
var IconsColor='rgb(6, 93, 233)'
const Navdown = (props) => {
    const {settype}=useContext(ProductContext);    

    const  handlSearch=(childdata)=>{

    
       const elem= document.getElementsByClassName('container-sub');
 

    for(let i=0;i<elem.length;i++){
        document.getElementsByClassName('container-sub')[i].style.display='none';
    }
    setTimeout(()=>{

        for(let i=0;i<elem.length;i++){
            document.getElementsByClassName('container-sub')[i].style.display='block';
        }
    },1000)
     
}    
    return (<div className='navdown-main-con' > <div className='navdown-con nnj '>
         <div className='items2' onClick={()=>{settype('آیفون');
                 
                 props.history.push('/Product');
               }}><div  className="links2" ><div className='insider'></div><AppleIcon width="25px" color={IconsColor} />
         <span className="m-2">آیفون</span>
         </div>
            
         </div>


        


         <div  className="items2"  onClick={()=>{settype("هوآوی");
                 
                 props.history.push('/Product');
               }}><div to="/login" className="links2  " ><div className='insider'></div><HuawieIcon width="25px" color={IconsColor}/>
         <span className="m-2">هوآوی</span>
         </div>  </div>

         
        <div className="items"  onClick={()=>{settype('شیائومی');
                 
                 props.history.push('/Product');
               }}><div  className="links2" ><div className='insider'></div><XaiomiIcon width="25px" color={IconsColor}/>
         <span className="m-2">شیائومی</span>
         </div>      </div>


         <div className="items2"  onClick={()=>{settype('الجی');
                 
                 props.history.push('/Product');
               }}><div to="/login" className="links2" ><div className='insider'></div><LgIcon width="25px" color={IconsColor}/>
         <span className="m-2">الجی</span>
         </div>       </div> 

       



         <div  className="items2"  onClick={()=>{settype('سامسونگ');
                 
                 props.history.push('/Product');
               }}><div to="/login"  className="links2"><div className='insider'></div><SumsungIcon width="48px" color={IconsColor}/>
         <span className="m-2">سامسونگ</span>
         </div>     </div>
         


         <div className="items2"><div to="/login" className="links2"><DiscountIcon2 width="25px" color={IconsColor}/>
         <span className="m-2">پیشنهاد ویژه</span>
         </div></div>

          </div>
          
         
        </div>
    );
};

export default withRouter( Navdown);