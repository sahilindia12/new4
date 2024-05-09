'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {
    const [username, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
  const   router = useRouter()
    const data={username,email,password}
const api =async()=>{

    let sing= await axios.post("http://localhost:5000/sinup",data)
    console.log(sing.data)
    const local = await localStorage.setItem("token1",sing.data.token)
    console.log(sing.data);
}




const getlocal= async()=>{
 const data= await localStorage.getItem("token")
 console.log("gettoken", data)
}

    console.log(username,password,email)
  return (
    <div>


<form className=' mx-[32vw]  bg-gray-300 p-2'>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">username</label>
    <input onChange={(e)=>setname(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div><div class="mb-3 ">
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


  <div className=' flex justify-center'>  
  <button type="submit" class="btn btn-primary" onClick={()=>router.push("/loging")}>loging</button></div>
<button onClick={()=>getlocal()}>token</button>
    </div>
  )
}

export default page