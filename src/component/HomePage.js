
import React, { useEffect } from 'react';
import './HomePage.css';
import ImgSlide from "./ImgSlide";
import lockphoto from '../images/lock3.svg';


const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

const HomePage=()=> {
    const images=["http://localhost:8088/uploads/photo1.jpg","http://localhost:8088/uploads/photo2.jpg","http://localhost:8088/uploads/photo3.jpg","http://localhost:8088/uploads/photo1.jpg"]
   
    useEffect(()=>{
        console.log('hi');


        



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
            
            <div className='part-tree'></div>
            <div className='part-four'></div>
        </div>
    );
};

export default HomePage;