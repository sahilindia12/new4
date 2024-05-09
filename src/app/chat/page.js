'use client'

import React, { useEffect,useMemo,useState } from 'react';
import io from 'socket.io-client';
const endpoint='http://localhost:5000';
function ChatApp() {
  
const [input, setinput] = useState();
const socket= io(endpoint,{transports:['websocket']})
  // const socket = useMemo(()=>{io(endpoint,{transports:['websocket']}); },[])
  useEffect(() => {
    // Connect to the Socket.IO server
   // replace with your server URL
  //  socket.on('msg',(data)=>{
  //   console.log(data);
  // })
    // Event listeners for Socket.IO events
    socket.on('connect', () => {
      console.log('Connected to server');
    },[]);
const data='websokect'
    socket.on('chat', (data) => {
      console.log('emit',data);

    });

    // socket.on('chat message', (msg) => {
    //   console.log('Received message:', msg);
    //   // Handle the received message
    // });

    // Clean up the socket connection on component unmount
  
  }, []);


const message=()=>{
  
  socket.on('msg',(data)=>{
    console.log(data);

  })
console.log('msg');
}

  return (
    <div>
      <h1>Chat Application</h1>


<input type="text"  onChange={(e)=>setinput(e.target.value)}/>
      <button  onClick={()=>message()}>message</button>

      {/* Your chat interface goes here */}
    </div>
  );
}

export default ChatApp;
