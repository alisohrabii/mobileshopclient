
              function  Cartitem({item,value}){
                const {id,name,img, rating, price,brand, total,count}=item;
                const {inCrement, deCrement, removeItem}=value;     
                 return(
                 <div className="d-flex flex-row-reverse cartitem">
                 <div className="">
                     <div className=" ">
                        <img src={img} style={{width:"160px", height:"160px"}} alt="product"/>
                     </div>
                     <div className="d-flex justify-content-center ">
                     <div className="cartinde"> 
                     <span className="cart-button" onClick={()=>deCrement(id)}>-</span>
                    <span style={{margin:"0px 7px 0px 3px"}}>  {count}</span>
                     <span className="cart-button " onClick={()=>inCrement(id)}>+</span>
                     </div>
                     </div>
                     </div>
                     <div className="text-right font-weght-bold font2  boder1 d-flex  flex-column ">
                     <div className="font2 di-rtl  " style={{fontSize:"15px"}}>        
                                       گوشی موبایل lg دوهسته ای با رم 6 گیگ
                     </div>
                     <div className="font3" style={{fontSize:"15px",color:"rgb(100,100,100)"}}>
                    <div className=" mt-1 di-rtl">    
                        <span className=" ">
                      برند:
                        </span>    
                        <span className="">
                        
                    {brand}
                    </span>
                    </div>
                    <div className=" di-rtl">      
                            <span className="">
                           میانگین امتیاز:
                            </span>  
                            <span className="">
                    {rating}
                    </span>
                    </div>
                  <div className=" di-rtl">
                  <span className="">
                  رنگ:
                  </span>
                  <span className="">
                  
                  مشکی
                  
                  </span>
                  </div>
                  <div className=" di-rtl ">
                  <span className="">
             گارانتی:
                  </span>
                  <span className="">
                  کاوش تیم
                  </span>
                  
                  </div>
                  </div>
                     <div className="font3 di-rtl mt-auto mb-2" style={{fontSize:"15px",color:"rgb(100,100,100)"}}>
                     <b>
                         <span className="font3">
                      قیمت:
                         </span>
                         {total}
                         <span>
                         تومان
                         </span>
                         </b>
                     </div>
                  
                
                  </div>     
                                       <div className="cart-trash" onClick={()=>removeItem(id)}>
                                       <img style={{width:"17px"}} src="immagge/cart-trash.svg"/>
                                       </div>
                 </div>
                 )}
              export default Cartitem;