
import React from 'react';
import './ProductDetail.css';
import bestprice from '../images/price3.svg';
import truck from '../images/truck.svg';
import describephoto from '../images/describe.svg';
import tecnicalphoto from '../images/tecnical.svg';
import {ProductContext} from '../context/ProductContext'
import {Carousel} from 'react-responsive-carousel';
import ZoomGallery from 'react-zoom-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// requires a loader

import {pricestyle,priceafter} from '../util/pricestyle';

const zoomGallery = [
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x'
]


class ProductDetail extends React.Component {
    constructor() {
        super();
        this.state = { colorselected:"",parttowshow:""}
    }



    handlecolor = (item, index,leng) => {
     
for (let i = 0; i < leng; i++){
 let elem=document.getElementsByClassName(`color-${i}`);
if (i==index){
     elem[0].style.border="2px solid rgb(38, 183, 202)";   
}else{
    elem[0].style.border="1px solid rgb(124, 124, 124)";  

}    



}
        this.setState({colorselected:item })
    }

 parttowselect=(item)=>{


    this.setState({parttowshow:item })


 }




componentDidMount(){

console.log('oooo')

}




 static contextType = ProductContext;
 
   
    render() {
        
  const unicproduct = this.context.productDetail;
     
  const addtocart = this.context.addtocart;
 
  
  console.log(unicproduct);
  if(unicproduct!==undefined){
    var prodetail=unicproduct.tecnicalinfo.slice(0,3);
  }
  setTimeout(()=>{
    console.log();
  },3000)
  

        return (
            <React.Fragment>

<div>
                
                {unicproduct!==undefined?(<div>
                    <div className='part-one'>
                    <div className='pro-image'>
                   <div className='con-crasouel'>   
                    <Carousel>
                {unicproduct.brifinfo.images.map(item=>{
return(<div>
    <img src={`http://localhost:8088/${item}`} />
</div>)
                })}   
            </Carousel>
            </div>
                    </div>
                    <div className='pro-data'>
                        <div  className='pro-name'>{unicproduct.brifinfo.name}</div>
                        <div className='pro-brand'>برند :<span   > {unicproduct.brand} </span></div>
                        <div className='pro-type'>دسته بندی :<span  > {unicproduct.type}</span> </div>
                        <div className='pro-main-character-con'>
                            <div>مشخصات اصلی</div>
                        {prodetail.map(item => {
                         return <div className='pro-main-character'><span className='pro-main-character-name'> .. {item.name}</span> :<span className='pro-main-character-value'> {item.value}</span></div>
                        })}
                        </div> 
                    </div>
                    <div className='pro-addto'>

              <div className='color-title'>انتخاب رنگ</div>
                       <div  className='color-select' >
                                {unicproduct.colors.map((item,index,arr) => {
                                return <div className={`color-${index}`} onClick={()=>{this.handlecolor(item,index,arr.length)}} ><span>{item}</span></div>
                                })}
                       </div>
                       
                       <div className='garanty'>گارانتی  :<span   > {unicproduct.garanty} </span></div>
                       
                       {unicproduct.brifinfo.discount>0?( 
                              <div className='product-item-discount'><div className='discount1'> %{unicproduct.brifinfo.discount}</div> <div className='discount2'><div></div> {pricestyle(unicproduct.brifinfo.price)}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span></span> <span></span></div>
                                )}
                              <div className='product-item-price'><span> {pricestyle(unicproduct.brifinfo.price)}</span> <span>تومان</span></div>
                              
                       <div className='price-de'>قیمت :       <span>{pricestyle(priceafter(unicproduct.brifinfo.price,1,unicproduct.brifinfo.discount))} </span>تومان</div>
                    <div><div onClick={()=>{
        if(this.state.colorselected!==''){
            alert('first one');
            addtocart(unicproduct,this.state.colorselected)  
        }else{
            alert('secound one');
        addtocart(unicproduct,unicproduct.colors[0])}}} className='button-addtocard'>افزودن به سبد خرید</div>
       
        </div> 
    
                            
                            
                            
                            
                 
                                                
                        <div  className="under-button">
                        <div><img  src={bestprice} width="25px"/> </div>
                        <div> تضمین بهترین قیمت</div>
                        </div>
                        <div  className="under-button">
                      <div> <img  src={truck} width="25px"/></div> 
                      <div>  ارسال در سریعترین زمان</div>                         </div>
         
                      </div>
                </div>
                <div>
                            <div className='parttowselect'>
                              <div className='tecnicalselect' onClick={()=>{this.parttowselect("tecnical")}}>

                                            <div  className="under-button">
                                    <div> <img  src={tecnicalphoto} width="20px"/></div> 
                                    <div>مشخصات فنی</div>
                                    </div>



                              </div>
                              <div  className="describeselect " onClick={()=>{this.parttowselect("describe")}}>


                                  
                                                <div  className="under-button">
                                        <div> <img  src={describephoto} width="20px"/></div> 
                                        <div>توضیحات</div>
                                        </div>
                              </div>
                           

                            </div>

                            <div className='parttowcontent'>
                            {this.state.parttowshow=='describe'?(
                            <div className='describe'>
                            {unicproduct.describe}

                            </div>
                            ):(<div className="tecnical">
                                <div className='pro-main-character-con '>
                            <div>مشخصات اصلی</div>
                        {unicproduct.tecnicalinfo.map(item => {
                         return <div className='pro-main-character nsidetecnical'><span className='tecnical-name'>  {item.name}</span> :<span className='tecnical-value'> {item.value}</span></div>
                        })}
                        </div> 
                          </div>  
                            )}
                            </div>

                </div>



            </div>):(<div>loading</div>)}



</div>

            </React.Fragment>
        );
    }
}
export default ProductDetail;

