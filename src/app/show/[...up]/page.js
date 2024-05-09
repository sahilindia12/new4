'use client'

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'




function  page ({params}) {

    const [id, setdata] = useState('hsdjfk');
// useEffect(() => {
  
//     const getid = async()=>{
//         let api =await axios.get("http://localhost:5000/get",{"id":params.up})

//      setdata(api.data)
//        }
//        getid()
// }, []);

console.log(id)



// setdata('hello')
// console.log("dat",id)

    const [nam, setname] = useState();
    console.log(nam)


    const update=async()=>{

       const delte= await axios.put('http://localhost:5000/update',{"id":params.up,"data":nam})
   console.log(delte.data)
    }
  return (
    <div>
        {/* {id.name} */}
{params.up}
{id.name}
     <div><h1>add your task this is todo list with mern stack</h1></div>


         <div className=' bg-purple-300 mx-[22vw] tb:sm:mx-[12vw] sm:mx-[12vw]  p-4'>
         

         <input name='name' onChange={(e)=>setname(e.target.value)} className=' text-2xl' type="text"  placeholder={id.name}/> <button onMouseEnter={()=>add()}  onClick={()=>update()} className=' mx-4 text-2xl text-white  bg-green-500 p-2 rounded-md'>add</button><button className=' mx-4 text-2xl text-white   bg-red-500 p-2 rounded-md'>delete</button>


         </div>

          <Link href={'/show'}>show todo list </Link>

   
<h3 className=' bg-pink-500'>this is tailwind css testing runign now</h3>
   <h2 className=' bg-red-500'>hellelee</h2>

   <button onClick={()=>get()}>token</button>
    </div>
  )
}

export default page