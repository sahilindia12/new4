'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {


  let router=useRouter()
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    
    const data={name,email,password}
const api =async()=>{

    let sing= await axios.post("http://localhost:4000/sinup",data)
    console.log(sing.data)
    const local = await localStorage.setItem("token",sing.data)
}




const getlocal= async()=>{
 const data= await localStorage.getItem("token")
 console.log("gettoken", data)
}

    console.log(name,password,email)
  return (
    <div>


<form className=' mx-[32vw]  bg-gray-300 p-2'>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

</form>
<div className=' flex justify-center'>  
  <button type="submit" class="btn btn-primary" onClick={()=>api()}>Singup</button></div>
<button onClick={()=>router.push("/loging")}>loging</button>
<button onClick={()=>getlocal()}>token</button>
    </div>
  )
}

export default page