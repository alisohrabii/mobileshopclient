
import React,{useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";

import './Login.css';
import Dropzone from 'react-dropzone';
   

const SetProduct = (props) => {
    const history=useHistory();
    const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail]=useState('');
  const [color, setColor]=useState('');
  const [errMssage, setErrMssage]=useState('');
  const [images, setImages] = useState([]);
  

 const ondrop=(files)=>{

let formdata= new FormData();
const config={

    header:{"content-type":"multipart/form-data"}
}
formdata.append("file",files[0]);
Axios.post("http://localhost:8088/product/UploadProductImage",formdata,config).then(
  response =>{
if(response.data.success){
setImages([...images,response.data.image]);
console.log([...images,response.data.image])
  }else{

alert("image doesnt saved ")

    }}
)



 }
  const onRegister=async()=>{




    //function
    const tryfetch=async()=>{
        try{
        const data={name:name,
            price:price,
             discount:discount,
             color:color,
             detail:detail,
             type:type};
             console.log(data);
        const registerAction=await Axios.post("http://localhost:8088/product/Setproduct",data);
        console.log(registerAction);
             }catch(err){
if(err.response){
            
console.error(err.response.data.mss);

setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد');} 
           }}

//validatin


   const validation=()=>{
if(name&&price&&discount&&detail&&type){

    return true;
}else{
    let mssa=' لطفا تمام فیلد ها را پر کنید'
    return mssa;

}
  }
//try to get data
if (validation()==true){
    console.log("88888")
    
    tryfetch()}else{
    setErrMssage(validation())
};

}


    

    return (
        <div className='center-box'>
        <div className="dropzone" style={{display:'flex'}}>
             <div className="dropzone-one">
                  <Dropzone
                  onDrop={ondrop}
                  multiple={false}
                  maxSize={8000000}
                  >


                      {({getRootProps,getInputProps})=>(
                         <div style={{width:"350px",height:"240px",border:"1px solid rgb(130,130,130)",display:"flex",alignItems:"center",justifyContent:"center"}}
                         {...getRootProps()}
                         >
                             <input {...getInputProps()}></input> 

                         <span>add photo</span>


                         </div>
                          


                      )


                      }
                  </Dropzone>



             </div>
      
             <div style={{display:'flex',overflow:"scroll",width:"450px"}} className="dropzone-two">
             {images.map((image,index)=>(
                 <div >
                 <img src={`http://localhost:8088/${image}`} style={{width:"200px ",height:'200px',minWidth:"300px"}}/>

                 </div>


                 )
             )}



             </div>
      



        </div>
        <div id='register-section' >
                <span>ثبت نام</span>              
                <div id='form' className='login-form'>
                     <div>
                    
                     </div>
                     <div className='login'>
                                <div >
                                    <label  className="ness">نام</label>
                                    <div className='input-section'>                                                 
                    
                                        <input   type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div>                          
                                        <label  className="ness">قیمت </label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={price} onChange={e=>setPrice(e.target.value)} placeholder=" قیمت  " className="register-input" ></input>
                                        </div>
                                </div>
                                <div >
                                    <label  className="ness">تخفیف</label>
                                    <div className='input-section'>                                                 
                            
                                        <input   type="number" value={discount} onChange={e=>setDiscount(e.target.value)} placeholder="میزان تخفیف را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">color</label>
                                    <div className='input-section'>                                                 
                                        
                                        <input   type="text" value={color} onChange={e=>setColor(e.target.value)} placeholder="color"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">دسته بندی کالا</label>
                                    <div className='input-section'>                                                 
                                    
                                        <input   type="text" value={type} onChange={e=>setType(e.target.value)} placeholder="TYpe"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">اdetail</label>
                                    <div className='input-section'>                                                 
                            
                                    <input   type="text" value={detail} onChange={e=>setDetail(e.target.value)} placeholder="TYpe"/>
                                   
                                    </div> 
                                </div>





                               <div className='button-container'>
                               
                                    <div className="register-buttom" onClick={onRegister}  >ثبت نام</div>
                               
                               </div>
                               <div>{errMssage}</div>
                                            </div>
                

                 </div>
            </div>
                           
     
        </div>
    );
};

export default SetProduct;