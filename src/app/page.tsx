"use client"

import { useSocket } from "@/context/SocketProvider"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const LoginPage = () => {
  
  const [email, setEmail] = useState("emrans4@gm.com");
  const [room, setRoom] = useState('33');

  const socket = useSocket();
  const router = useRouter();
  
  // 1 Sent an event request to server to join
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //2 You send a room:join event when the form is submitted, informing the server that the user wants to join a specific room.
    socket?.emit("room:join", {email, room}); 
  }

  // 4
  //
  const handleJoiRoom = (data) => {
    const {email, room} = data;
    router.push(`/room/${room}`); 
  }

  useEffect(()=>{
    //3  when room:join event received inside handleJoinRoom
    socket.on("room:join", handleJoiRoom)
    return ()=> {
      socket.off("room:join", handleJoiRoom)
    }
  },[socket])



  return (
    <div className="">
      <h1>Login page </h1>

      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-1/3 bg-slate-400 rounded-lg px-8 py-4 ">
          <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block px-2 w-full rounded" />
          <input type="text" name="roomId" id="roomId" value={room} onChange={(e)=>setRoom(e.target.value)} className="block px-2 w-full rounded my-2 " />
          <button type="submit" className="bg-orange-600 text-white font-semibold px-3 py-2 rounded mx-auto">Enter </button>
        </div>
      </form>

    </div>
  )
}

export default LoginPage;