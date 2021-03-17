import testphoto from '../images/bell.svg';
import "./cart.css";
import trash from '../images/trash.svg';
import {pricestyle,priceafter,pricediscount} from "../util/pricestyle";
import React from 'react';
  const Cartitem=(props)=>{
  const {id,name, colorselected,rating,existnumber, brifinfo,brand,garanty, total,count}=props.item;            
  const {addcount,subcount,errmssage, removeitem}=props.value;     
 
                         
                return(
                 <div className=" cartitem" >
               {console.log("kkkkkkk")}
               {console.log()}
                     <div className=" ">
                        <img src={testphoto} width='100px'/>
                     </div>
                     
                     
                     <div className=" " style={{textAlign:"right",flexGrow:"3"}}>
                                       <div style={{fontSize:"17px",direction:"rtl"}}>        
                                                        {name}
                                       </div>
                                       <div className="cart-item-char" >
                                                   <div   style={{direction:"rtl"}}>    
                                                         <span className=" ">
                                                      برند:
                                                         </span>    
                                                         <span className="">
                                                         
                                                   {brand}
                                                   </span>
                                                   </div>
                                    
                                                   <div  style={{direction:"rtl"}}>
                                                   <span >
                                                   رنگ:
                                                   </span>
                                                   <span className="">
                                                   
                                                   {colorselected}
                                                   
                                                   </span>
                                                   </div>
                                                   <div  style={{direction:"rtl"}}>
                                                   <span >
                                             گارانتی:
                                                   </span>
                                                   <span >
                                                 {garanty}
                                                   </span>
                                                   
                                                   </div>
                                    </div>
                                    <div className="cart-item-price-discount"  >
                                   
                                    <span>
                                     تخفیف
                                     </span>
                                     {pricestyle(pricediscount(brifinfo.price,count,brifinfo.discount))}
                                    
                                     <span>
                                    تومان
                                     </span>
                                
                                  </div>
                                    <div className="cart-item-price"  >
                                     
                                          
                                          {pricestyle(priceafter(brifinfo.price,count,brifinfo.discount))}
                                          <span>
                                          تومان
                                          </span>
                                     
                                       </div>
                                    
                                       <div style={{display:"flex",flexDirection:"row"}}>
                                             
                                             <div style={{color:"rgb(12, 150, 155)",fontSize:"13px",margin:"0px 0% 0px auto"}} onClick={()=>removeitem(id)}>
                                               <span style={{margin:"0px 2px 3px 2px"}}> حذف</span>
                                             <img style={{width:"17px"}} src={trash}/>
                                             </div>

                                             <div style={{margin:"0px 13px 0px auto",width:"75px" ,color:"rgb(155,155,155)",border:"1px solid rgb(155,155,155)",padding:"0px 9px",fontSize:"20px",borderRadius:"2px"}}> 
                                             <span style={{fontSize:"26px"  ,margin:"0px 4px"}}  onClick={()=>subcount(id,colorselected)}>-</span>
                                             <span style={{fontSize:"26px"  ,margin:"0px 7px 5px 7px"}} >{count}</span>
                                             <span   style={{fontSize:"26px" ,margin:"0px 4px"}} onClick={()=>addcount(id,colorselected,existnumber)}>+</span>
                                             </div>
                                             <div>{errmssage}</div>
                                       </div>


                               </div>     
                                                         
                                 </div>
                 )}
              export default Cartitem;