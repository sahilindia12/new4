'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'


function page() {



// useEffect(() => {
//   const apii = async()=>{
//     // const sing=  await (axios.get("http://localhost:4000/get"))
//     // console.log(sing.data)

//     const fet= await fetch('http://localhost:4000/get')
//     const tep= await fet.json()
//      console.log(tep)
//    }
// apii()
    
  
// }, []);





    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    
    const data={name,email,password}



      
     const apii = async()=>{
      // const sing=  await (axios.get("http://localhost:4000/get"))
      // console.log(sing.data)

      // const fet= await  axios.get('http://localhost:5000/get')
      

       const fet= await fetch("http://localhost:5000/get")
       const j=  await fet.json() 
       console.log(j);
     }

const api =async()=>{

    const sing=  await axios.post("http://localhost:5000/loging",data)
    console.log(sing.data)
  

// const data= await fetch("http://localhost:4000/get")
// const jj= await data.json()
//     console.log(jj)
// const  response= await fetch('/http://localhost:4000/pass', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ data }),
// });

// let datao= await response.json()
// console.log(datao)


}

const app= async()=>{
  const ax= await axios.post("http://localhost:5000/sinup")
  console.log(ax.data);
}



const getlocal= async()=>{
 const data= await localStorage.getItem("token")
 console.log("gettoken", data)
}

    console.log(name,password,email)
  return (
    <div>

<h2>this is loging page </h2>
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

<button onClick={()=>getlocal()}>token</button>

<button onClick={()=>api()}>apii</button>
    </div>
  )
}

export default page