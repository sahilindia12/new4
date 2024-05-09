'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function  page () {

    const router= useRouter()

    const map=[{'name':'sahil india','age':'23'}]

const [api, setapi] = useState([]);
const  [loading, setloading] = useState(true);
useEffect(  () => {
   
    const ap=async()=>{
        const token= await localStorage.getItem("token")
        const appi= await axios.post("http://localhost:5000/get",)
        setapi(appi.data)
       setloading(false)
       }
       ap()
}, []);


console.log("data",api)
    const del=async(id)=>{

   const delte= await axios.post('http://localhost:5000/del',{id})
console.log(delte)
   
    }
     
    const up=async(id)=>{
router.push(`show/${id}`)

     console.log(id)
        
         }  
     
        
  return (
    <div>
{/* {loading?<h1>loading...😍😘🥰</h1>:null} */}
<button onClick={()=>ap()}>call api</button>
{
    
    api? api.map((itme,_id)=>{
        return(
            <>
            <div className=' flex py-2  bg-green-400 mx-[21vw]'>
            <h1 className=' bg-white mx-3 p-2 rounded-sm'>{_id}</h1>
            <h1 className=' bg-white mx-3 p-2 rounded-sm' >{itme.username}</h1>
            
              <button className=' bg-red-500 mx-2' onClick={()=>del(itme._id)} >delete</button> <button onClick={()=>up(itme._id)}>update</button>
            </div>
            </>
        )
    }) :<h1>not comg ap</h1>




}



    </div>
  )
}

export default page




 // const api= await axios.post("http://localhost:4000/task")
            // console.log(api.data)