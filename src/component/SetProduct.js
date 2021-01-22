
import React,{useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";

import './Login.css';
   

const SetProduct = (props) => {
    const history=useHistory();
    const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail]=useState('');
  const [color, setColor]=useState('');
  const [errMssage, setErrMssage]=useState('');
 


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
                                        <label  className="ness">نام خانوادگی </label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={price} onChange={e=>setPrice(e.target.value)} placeholder=" نام خانوادگی خود را وارد نماید " className="register-input" ></input>
                                        </div>
                                </div>
                                <div >
                                    <label  className="ness">شماره موبایل</label>
                                    <div className='input-section'>                                                 
                            
                                        <input   type="number" value={discount} onChange={e=>setDiscount(e.target.value)} placeholder="شماره موبایل خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">color</label>
                                    <div className='input-section'>                                                 
                                        
                                        <input   type="text" value={color} onChange={e=>setColor(e.target.value)} placeholder="color"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">ایمیل خود را وارد نماید</label>
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