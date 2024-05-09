import Link from 'next/link';
import React from 'react';



const Foter = () => {
    return (
        <div className='  bg-red-500'>
           <div className='sm:justify-center  p-2  grid  md:grid-cols-4 tb:grid-cols-2 sm: grid-cols-2 '>



<div className="sm:mx-12 inline-block ml-8  ">
          <h1 className=" text-3xl mt-2 text-gray-50 md:text-4xl ">service</h1>
          <Link href={'fetch'} className="  text-white no-underline animate-bounce hover:text-gray-50">fetch</Link> <br></br>
          <Link href={'/movie/spider'} className="hover:text-gray-50 ">spider</Link> <br></br>
          <Link href={'/movie/new24'} className="hover:text-gray-50 ">new24</Link> <br></br>
          <Link href={'/movie/logan'} className="hover:text-gray-50 ">logan</Link> <br></br>
          </div>
          <div className="sm:mx-12 ml-8 ">
          <h1 className=" text-3xl mt-2 text-gray-50 md:text-4xl">nav</h1>
          <Link href={'./recatsty'} className="hover:text-gray-50 ">nav</Link> <br></br>
          <Link href={'./formik'} className="hover:text-gray-50 ">formik</Link> <br></br>
          <Link href={'/movie/newholly'} className="hover:text-gray-50 ">newhollywood</Link> <br></br>
          <Link href={'/movie/south'} className="">south</Link> <br></br>
          </div>
          <div className="sm:mx-12 ml-8 ">
          <h1 className=" text-3xl mt-2 text-gray-50 md:text-4xl ">contact</h1>
          <Link href={'#'} className="hover:text-gray-50 ">html</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">css</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">js</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">bootstrap</Link> <br></br>
          </div>
          <div className=" sm:mx-12 ml-8 ">
          <h1 className=" text-3xl mt-2 text-gray-50">web languse</h1>
          <Link href={'#'} className="hover:text-gray-50 ">html</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">css</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">js</Link> <br></br>
          <Link href={'#'} className="hover:text-gray-50 ">bootstrap</Link> <br></br>
          </div>

          

</div> 
<p className='block text-center text-white m-4 p-1'>this power by sahil india copy right go from my websire now</p>
        </div>
    );
};





export default Foter;
