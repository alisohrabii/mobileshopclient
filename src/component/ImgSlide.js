import React, {useState, useEffect } from 'react';
import './HomePage.css';
const ImgSlide = (props) => {
    const [currentleft, setcurrentleft] = useState(0);
    const [currentleft2, setcurrentleft2] = useState(true);
  
    const images=props.images;
    const handelslideshow=(item,id)=>{
        
        var elem2 =document.getElementById('conslider');
      handel_dot_Color(id);
        
        var elem =document.getElementById('fig');
       console.log(`elem style left is${currentleft}`);
        elem.style.left=`${-(item*elem2.offsetWidth)}px`
setcurrentleft2(false);
setTimeout(()=>{
    setcurrentleft2(true);  
},900)

       

    }
  const  handel_dot_Color=(id)=>{
        for(let i=0;i<images.length-1;i++){
            var dot_elem=document.getElementById(`dot-${i}`);
            if(id==`dot-${i}`){
                console.log('inside equal');
                dot_elem.style.background="rgb(152,152,152)"
    
            }else{
                console.log('inside unnequal');
                dot_elem.style.background="transparent"
            }
           }
    }

    
    useEffect(()=>{
    
         if(currentleft2){
        var divlength;
        var elem =document.getElementById('fig');
        var elem2 =document.getElementById('conslider');
        setTimeout(()=>{          

        console.log(`width ${elem2.offsetWidth}`);
     divlength=elem2.offsetWidth;
    },700);
    var x=0;

    const   slideinterval=  setInterval(() => { 
        setTimeout(()=>{
            console.log(`currentleft is ${currentleft}`);
            x =  x-divlength;
           let num=-(x/divlength);
           if(num>images.length-2){
               num=0;
           }

           const cer=`dot-${num}`
           handel_dot_Color(cer);
         
            console.log(`x is ${x}`);
            elem.style.transition='left 0.3s';
                     elem.style.left=`${x}px`;
        },1000)    
if(x < (-(2*divlength))){
    console.log('kkkkkk')
    x=0;
elem.style.transition='left 0s';
elem.style.left=`0`;
}
            setcurrentleft(x);
          }, 3500);
          return () => clearInterval(slideinterval);
    
        }
           
    


    },[currentleft2])
    return (
       
        <div className="slideshow" id="conslider">
            
            <figure id="fig">
         {images.map((item)=>{

   return <img  src={item}></img>

         })}
         </figure>   
         <div className="slide-dote-con">
             <div id='dot-0' onClick={()=>{handelslideshow(0,'dot-0')}} className="slide-dote"></div>
             <div id='dot-1' onClick={()=>{handelslideshow(1,'dot-1')}} className="slide-dote"></div>
             <div id='dot-2' onClick={()=>{handelslideshow(2,'dot-2')}} className="slide-dote"></div>
            </div>
        </div>
    
    );
};

export default ImgSlide;