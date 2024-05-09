 'use client'

import axios from 'axios';

import React, { useState } from 'react'
import { toast } from 'react-toastify';

function page() {

  const [pas,setpas]=useState()
console.log(pas);

const chang=async()=>{
  console.log('dfsd');
  toast.success("passchanghe")
}
  const token=async()=>{
    
    const token=  await localStorage.getItem("token1")
    console.log(token);
  }

  const tokendel=async()=>{
    const token=  await localStorage.removeItem("token1")
    console.log(token);
  }


    const otpno=async()=>{

        const opt= await axios.post("http://localhost:5000/otp")
        console.log('opt ',opt.data);
    }

    const otpgm=async()=>{

        const opt= await axios.post("http://localhost:5000/gmail")
        console.log('optgmail ',opt.data);
    }
  return (
    <div>
     <h1 className='  bg-orange-500'>this is otp page number otp and gmail otp testing with node js </h1>
    
    <div className=' flex '>

 <button  className=' text-white p-2 my-3  bg-red-500 mx-9 ' onClick={()=>otpno()}>otp number</button>
 <button onClick={()=>otpgm()} className=' text-white p-2 my-3  bg-green-500 mx-9 '>otp gmail</button>
    </div>
    
    <button onClick={()=>token()}>token</button>

    <button onClick={()=>tokendel()}>logout</button>


    <div>
<h1>change your current password using node js and express js</h1>

<div className=' flex justify-center items-center'>

 <div>

 <input onChange={(e)=>setpas(e.target.value)} className='   border-2 border-blue-50 m-2  ' placeholder=' inter pass' type="password"  /> <br/>
  <input className='  border-2 border-blue-50 m-2  ' placeholder=' inter pass again' type="password"  /> <br/>

 </div>
  <button onClick={()=>chang()} className=' bg-green-400 rounded-md m-2 p-2'>change pass</button>
</div>

    </div>
    </div>
  )
}

export default page



