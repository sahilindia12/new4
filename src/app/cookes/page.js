'use client'
import { useEffect } from "react";
import axios from "axios";
function page() {


  useEffect(() => {
    
const cook=async()=>{

  const api= await axios.get("http://localhost:5000/cookes")

  console.log("set cookes",api.data);
}
cook()
  }, []);
  return (
    <div>pahe



        <h1>
            this is yur cookses set withg now
        </h1>
    </div>
  )
}

export default page

// export const metadata = {
//   title: 'WeigWeight loss pills that actually workk',
//   description: 'Weight loss pills that actually work',
// }