
import React from 'react';
import './ProductDetail.css';
import bestprice from '../images/price3.svg';
import truck from '../images/truck.svg';
import describephoto from '../images/describe.svg';
import tecnicalphoto from '../images/tecnical.svg';


var unicproduct = {
    id: 1,
    name: 'گوشی موبایل نوکیا مدل 150 دوسیم کارت '
    ,
    img: "immagge/product1.jpg",
    info: "high-five is the best way possible I would like to be friend of of the world and I will be there at home and I will be there for many of us will be there at home and I will be there at home and I have to be friend with a best Wayne I don't think we will see how I doing with plan you have a good day at school tomorrow I can get the best Wayne we can",
    price: 25700,
    incart: false,
    count: 0,
    brand: 'فیلیپس',
    type: "سشوار",
    discount: 7,
    garanty:"اصالت و سلامت  فیزیکی کالا",
    total: 0,
    pro: "ki hi <br/>ki",
    describe: "این دستگاه محصول شرک شیوامی برای کاربریاین دستگاه محصول شرک شیوامی برای کاربری عمومی  این دستگاه محصول شرک شیوامی برای کاربری عمومی این دستگاه محصول شرک شیوامی برای کاربری عمومی این دستگاه محصول شرک شیوامی برای کاربری عمومی  این دستگاه محصول شرک شیوامی برای کاربری عمومی این دستگاه محصول شرک شیوامی برای کاربری عمومی  عمومی مناسب بوده"
    ,
    color: ['قرمز','مشکی','آبی','سفید'],

    prodetail: [{ name: "صفحه نمایش", code: "12mpx" }, { name: "پردازنده", code: "cori5 N2300 3.5Ghz" }, { name: "حافظه داخلی", code: "6G" },   { name: "دوربین جلو", code: "12Mpx" }]
    ,
    coment: [{ text: "hi my name s ali", writer: "ali" }]
,tecnicalinfo: [{ name: "صفحه نمایش", code: "12mpx" }, { name: "پردازنده", code: "cori5 N2300 3.5Ghz" }, { name: "حافظه داخلی", code: "6G" },   { name: "دوربین جلو", code: "12Mpx" }]
}


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








    render() {
    let price=unicproduct.price;
    let kk =price.toString();
  let price2;
  if(kk.length>6){
  let ss=kk.substring(kk.length-6,kk.length-3)
  let nn=kk.substring(0,kk.length-6);
  nn += ",";
  nn += ss;
  nn += ",000";
  price2=nn;
  }else{let oo=kk.substring(kk.length-3,kk.length);
  price2 =kk.substring(0, kk.length-3);
  price2 += ",";
  price2 +=oo;
  }
  

        return (
            <React.Fragment>



                <div className='part-one'>
                    <div className='pro-image'></div>
                    <div className='pro-data'>
                        <div  className='pro-name'>{unicproduct.name}</div>
                        <div className='pro-brand'>برند :<span   > {unicproduct.brand} </span></div>

                        
                       
                        <div className='pro-type'>دسته بندی :<span  > {unicproduct.type}</span> </div>
                        <div className='pro-main-character-con'>
                            <div>مشخصات اصلی</div>
                        {unicproduct.prodetail.map(item => {
                         return <div className='pro-main-character'><span className='pro-main-character-name'> .. {item.name}</span> :<span className='pro-main-character-value'> {item.code}</span></div>
                        })}
                        </div> 
                    </div>
                    <div className='pro-addto'>

              <div className='color-title'>انتخاب رنگ</div>
                       <div  className='color-select' >
                                {unicproduct.color.map((item,index,arr) => {
                                return <div className={`color-${index}`} onClick={()=>{this.handlecolor(item,index,arr.length)}} ><span>{item}</span></div>
                                })}
                       </div>
                       
                       <div className='garanty'>گارانتی  :<span   > {unicproduct.garanty} </span></div>
                       
                       <div className='price-de'>قیمت :       <span> {price2} </span>تومان</div>
         
                        <div className='button-addtocard'>افزودن به سبد خرید</div>
                                                
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
                         return <div className='pro-main-character nsidetecnical'><span className='tecnical-name'>  {item.name}</span> :<span className='tecnical-value'> {item.code}</span></div>
                        })}
                        </div> 
                          </div>  
                            )}
                            </div>

                </div>

            </React.Fragment>
        );
    }
}
export default ProductDetail;

