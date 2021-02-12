import React from 'react';
           function Cartlist({value}) { 
               const {cart}=value;
               return(
                   <div className="cartlist">
                       {cart.map(item=>{return <Cartitem key={item.id} item={item} value={value}/>})}
                   </div>
               )}
            export default Cartlist;