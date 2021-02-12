import React from 'react';

                 function  Carttotal({value}){
                    const {cartsubtotal, cartax, carttotal,clearCart}=value;
                       return(
                    <React.Fragment>
                                  
                             <div className=" font2 text-center di-rtl align-r mt-4 mb-5" style={{background:"rgb(257, 257, 248)"}}>                              
                               <div className="py-2 border-b">
                                  <span className="text-title">
                                  جمع کل قیمت:
                                  </span>
                         <span  className="mx-2"> {cartsubtotal}</span>
                               </div>
                               <div className="py-2 border-b" style={{fontSize:"13px"}}>
                               <img className="mx-1" src="immagge/cart113.svg" width="27px"/>
                                  <span className="text-title">
                                   هزینه ارسال:                    
                                  </span>
                            <span  className="mx-2">{cartax}</span>
                            
                               </div>
                               <div className="py-2  border-b" style={{fontSize:"13px"}}>
                               <img src="immagge/discount111.svg" width="27px"/>
                                  <span className="text-title">
                                   مجموع تخفیف:                    
                                  </span>
                                                <span  className="mx-2">{cartax}</span>
                    
                                                
                               </div>
                               <div className="py-2 border-b">
                              
                                  <span className="text-title font2">
                                  
                 مبلغ قابل پرداخت:
                                  </span>
                           <span  className="mr-2 ml-1">{carttotal}</span>
                           <span style={{fontSize:"13px"}}>تومان</span>
                          
                               </div>       
                                                <div className=" ">
                                                
                                              
                                                
                                                <Link to="/cartnext" >
                                                <div className="py-2 font2 text-center" style={{background:"rgb(8, 163, 135)",color:"white"}} >
                                                
                               ادامه فرایند خرید
                                
                                                </div>
                                                
                                                </Link>
                                                
                                                
                                                </div>
                        </div>
                       
                      </React.Fragment>
                       )}
                    export default Carttotal;