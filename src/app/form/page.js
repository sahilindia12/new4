
'use client'

import axios from 'axios';
import React, { useState } from 'react'

function page() {

  


    const [username, setuser] = useState();
    const [password, setpas] = useState();
    const [email, setemail] = useState();
const data={username,password,email}
    const [togal, settogal] = useState(true);
 const show=()=>{
           settogal(!togal)
 }
    console.log(username,
        
        password,email)


        const submit = async()=>{
            const api= await  axios.post('http://localhost:4000/sing')

            console.log(api.data)
        }
  return (
    <div>


<div className=' mx-10 bg-slate-500 p-4 '>


<input onChange={(e)=> setuser(e.target.value)}  className=' text-2xl my-6 mx-[355px] ' type="text" placeholder=' username' />  <br/>


<input onChange={(e)=> setpas(e.target.value)} className=' text-2xl  my-6 mx-[355px]' type={togal?"password":"text"} placeholder=' password'  />  <button onClick={()=>show()}>{togal?<h1>show</h1>:<h2>hide</h2>}</button><br/>


<input onChange={(e)=> setemail(e.target.value)} className=' text-2xl my-6 mx-[355px] ' type="text" placeholder='email' /> <br/>

<div className=' flex justify-center p-2 mr-[15vw]'> <button onClick={()=>submit()} className=' p-2 text-3xl bg-green-500 rounded-sm '> singup</button><button className=' mx-4 p-2 text-3xl  bg-red-500  rounded-sm '> loging</button></div>
</div>

    
    </div>
  )
}

export default page