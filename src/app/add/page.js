'use client'

import axios from 'axios';
import Link from 'next/link';
import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';



function page() {
  const notify=()=> toast.success("add your task")
  useEffect(() => {
   
  }, []);

    const [nam, setname] = useState();
    console.log(nam)


    const add=async()=>{
try {
    const api= await axios.post("http://localhost:5000/add",{nam})
    console.log(api.data)
 
    notify()
} catch (error) {
    console.log(error)
}

 
    }
  return (
    <div>

     <div><h1>add your task this is todo list with mern stack</h1></div>


         <div className=' bg-purple-300 mx-[22vw] tb:sm:mx-[12vw] sm:mx-[12vw]  p-4'>
         

         <input name='name' onChange={(e)=>setname(e.target.value)} className=' text-2xl' type="text"  placeholder={nam}/> <button onMouseEnter={()=>add()}  onClick={()=>add()} className=' mx-4 text-2xl text-white  bg-green-500 p-2 rounded-md'>add</button><button className=' mx-4 text-2xl text-white   bg-red-500 p-2 rounded-md'>delete</button>


         </div>

          <Link href={'/show'}>show todo list </Link>

   
<h3 className=' bg-pink-500'>this is tailwind css testing runign now</h3>
   <h2 className=' bg-red-500'>hellelee</h2>
    </div>
  )
}

export default page