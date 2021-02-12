import React,{useContext, useEffect} from 'react';
import {ProductContext} from '../context/ProductContext'
import testphoto from '../images/product45.jpg';
import "./product.css";
import Axios from 'axios';
const first={
  productname:"گوشی موبایل سامسونگ مدل g750",
  price:"580,000",
  discount:7
  }
  
const second={
  productname:"گوشی موبایل سامسونگ مدل g750",
  price:"9,560,000",
  discount:17
  }
  
  const products2=[first,second,first,first,second,first,first,second,first,first,second,first]

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
 const products3 = this.context.product;
 
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
          {products3.length!=0?(<div className='product-container'>
         
            {products3.map(product=>{
            console.log(`product price ${product.price}`);  
  let afterprice=product.price.replace(/,/g, '');
  console.log(afterprice);
  let bb=((afterprice*100)/(100-product.discount));
  let cc=(Math.round(bb/1000)*1000);
  console.log(cc);
  let kk =cc.toString();
  let pricebefor;
  if(kk.length>6){
  let ss=kk.substring(kk.length-6,kk.length-3)
  let nn=kk.substring(0,kk.length-6);
  nn += ",";
  nn += ss;
  nn += ",000";
  pricebefor=nn;
  }else{let oo=kk.substring(kk.length-3,kk.length);
  pricebefor =kk.substring(0, kk.length-3);
  pricebefor += ",";
  pricebefor +=oo;
  }
  
  
                return <div className='product-item'>
     
                          <div className="product-item-in">
                               <div ><img src={testphoto} className='product-image'/></div>
                               {console.log(`product name ${product.productname}`)}          
  
                              <div className='product-item-name'>{product.name}</div>
                              {product.discount>1?( 
                              <div className='product-item-discount'><div className='discount1'> %{product.discount}</div> <div className='discount2'><div></div> {pricebefor}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span> %{product.discount}</span> <span></span></div>
                                )}
                              <div className='product-item-price'><span> {product.price}</span> <span>ریال</span></div>
                              
                              <div className='product-item-addtocart'>اضافه به سبد +</div>
  
                           </div>
                        </div>
  
  
  



})}


          
            </div>):(<div>loading.......</div>)}
                </div>
    );
}};

export default Product;