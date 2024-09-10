"use client"

import { useState } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const LoginPage = () => {
  
  const [email, setEmail] = useState("emrans4@gm.com");
  const [room, setRoom] = useState('33');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, room);
    
  }



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