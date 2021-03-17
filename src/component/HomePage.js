
import React, { useEffect,useState } from 'react';
import './HomePage.css';
import ImgSlide from "./ImgSlide";
import Axios from "axios";
import PhoneIcon from '../util/Icons';
import ElsticSlide from './ElsticSlide';
const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;


const HomePage=()=> {
    const images=["http://localhost:8088/uploads/photo1.jpg","http://localhost:8088/uploads/photo2.jpg","http://localhost:8088/uploads/photo3.jpg","http://localhost:8088/uploads/photo1.jpg"]
    const [itemms, setitemms] = useState([
        {id: 1, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test1.png",discount:5,price:453000},
        {id: 2, name: 'مایع بک کننده قوی  ا ب ث ',image:"http://localhost:8088/uploads/test2.png",discount:0,price:966000},
        {id: 3, name: 'کرم ضد آفتاب تارو دو پلاس  مناسب پوست چرب',image:"http://localhost:8088/uploads/test3.png",discount:6,price:79000},
        {id: 4, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test1.png",discount:5,price:883000},
        {id: 5, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test2.png",discount:5,price:113000},
        {id: 6, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test3.png",discount:5,price:223000},
        {id: 7, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test1.png",discount:5,price:453000},
        {id: 8, name: 'مایع ظرفشویی ون و اکتیو ',image:"http://localhost:8088/uploads/test2.png",discount:5,price:453000},
       
      ]);
      const [MObileProduct, setMObileProduct] = useState([]);
    useEffect(()=>{
        console.log('hi');



 Axios.post("http://localhost:8088/product/GetproductbyType",{type:'mobile'}).then(res=>{
console.log(res);
if(res.status==200){
   setMObileProduct(res.data.mypro)
}
 
 })

      
        



    },[])
    
    return (
        <div className="home-page-con">
           
           
           <div className='part-one'>
                <div className='part-one-first'>
                    <div className='part-one-first-up'><div className="slideshow-con box-shadow"><ImgSlide images={images}/></div></div>
                    <div className='part-one-first-down'>
                           <div className='box-shadow' ><img src='http://localhost:8088/uploads/photo-down.jpg'/></div>
                           <div className='box-shadow' ><img src='http://localhost:8088/uploads/photo-down2.jpg'/></div>
                    </div>
                </div>
                <div className='part-one-secound'>
                <div className='part-one-secound-up box-shadow'><img src='http://localhost:8088/uploads/left-up.jpg'/> </div>
                    <div className='part-one-secound-down box-shadow'><img src='http://localhost:8088/uploads/photo-left-down.jpg'/></div>



                </div>
               
            </div>
            
           
            {MObileProduct.length>0?(
            <div className='box-elstic-show' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",padding:"19px 0px",fontSize:"18px",fontWeight:"300",textAlign:"right",borderBottom:"1px solid rgb(211,211,211)"}}>پرفروش ترین ها </div>
          <ElsticSlide itemms={MObileProduct} time='13000'/>
            </div>):(<div>.....myskeleton</div>)
}

{MObileProduct.length>0?(
            <div className='box-elstic-show' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",padding:"19px 0px",fontSize:"18px",fontWeight:"300",textAlign:"right",borderBottom:"1px solid rgb(211,211,211)"}}>پرفروش ترین ها </div>
          <ElsticSlide itemms={MObileProduct} time='7700'/>
            </div>):(<div>.....myskeleton</div>)
}


            <div className="part3">
               <div ><img src='http://localhost:8088/uploads/part3-1.jpg'/></div>
               <div><img src='http://localhost:8088/uploads/part3-2.jpg'/></div>
               <div><img src='http://localhost:8088/uploads/part3-3.jpg'/></div>
               <div><img src='http://localhost:8088/uploads/part3-4.jpg'/></div>

            </div>
          
            {MObileProduct.length>0?(
            <div className='box-elstic-show' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",padding:"19px 0px",fontSize:"18px",fontWeight:"300",textAlign:"right",borderBottom:"1px solid rgb(211,211,211)"}}>پرفروش ترین ها </div>
          <ElsticSlide itemms={MObileProduct} time='10000'/>
            </div>):(<div>.....myskeleton</div>)
}

{MObileProduct.length>0?(
            <div className='box-elstic-show' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",padding:"19px 0px",fontSize:"18px",fontWeight:"300",textAlign:"right",borderBottom:"1px solid rgb(211,211,211)"}}>پرفروش ترین ها </div>
          <ElsticSlide itemms={MObileProduct} time='14000'/>
            </div>):(<div>.....myskeleton</div>)
}

            <div className="part4">
                 <div><img src='http://localhost:8088/uploads/part4-1.jpg'/></div>
               <div><img src='http://localhost:8088/uploads/part4-2.jpg'/></div>
            </div>
        
        
        </div>
    );
};

export default HomePage;