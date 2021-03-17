import React,{useContext, useEffect} from 'react';
import {ProductContext} from '../context/ProductContext'

import "./product.css";
import {useHistory} from "react-router-dom";

import {pricestyle,priceafter} from '../util/pricestyle';


  
class Product extends React.Component {
  constructor (props){
  super (props);
  this.state={errmsage:"",sort:"پرفروش ترین"}
  }

  sorttype=(item)=>{
this.setState({sort:item})

let elem=document.getElementsByClassName('insidesort');
elem[0].style.display='none';


  }
  sortshow=()=>{
let elem=document.getElementsByClassName('insidesort');
if(elem[0].style.display=="block"){


  elem[0].style.display='none';
}else{

  elem[0].style.display='block';
}
  }


  static contextType = ProductContext;
render(){
  const mythis=this;
 const products3 = this.context.product;
 const handelProductDetail = this.context.handelProductDetail;
    return (
        <div className='main-container'>
          <div className="sort">
            <div onClick={this.sortshow} className='sorthead'> مرتب سازی <span>{this.state.sort}</span></div>
            <div className='insidesort'>
            <div onClick={()=>this.sorttype("پرفروش ترین")}>پرفروش ترین</div>
            <div onClick={()=>this.sorttype("گرانترین")}>گرانترین</div>
            <div onClick={()=>this.sorttype("ارزانترین")}>ارزانترین</div>
            <div onClick={()=>this.sorttype("محبوب ترین")}>محبوب ترین</div>
            </div>
          </div>
          {console.log(products3)}
          {products3.length!=0?(<div className='product-container'>
         
            {products3.map(product=>{
            console.log(`product price ${product.price}`);  

            const {proid,price,discount,images,name}=product;
            
            
                return <div className='product-item' onClick={()=>{handelProductDetail(proid);
                 
                  this.props.history.push('/ProductDetail');
                }}>
     
                          <div className="product-item-in">
                               <div ><img src={`http://localhost:8088/${images[0]}`} className='product-image'/></div>
                                  
  
                              <div className='product-item-name'>{name}</div>
                              {product.discount>1?( 
                              <div className='product-item-discount'><div className='discount1'> %{product.discount}</div> <div className='discount2'><div></div> {pricestyle(price)}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span> %{product.discount}</span> <span></span></div>
                                )}
                              <div className='product-item-price'><span> {pricestyle(priceafter(price,1,discount))}</span> <span>تومان</span></div>
                              
                              <div className='product-item-addtocart'>اضافه به سبد +</div>
  
                           </div>
                        </div>
  
  
  



})}


          
            </div>):(<div>loading.......</div>)}
                </div>
    );
}};

export default Product;