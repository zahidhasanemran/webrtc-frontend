"use client"

import { useSocket } from "@/context/SocketProvider"
import { useParams } from "next/navigation"
import { useEffect } from "react"

export const RoomPage = () => {
  
  const router = useParams();
  const socket = useSocket();

  const userHandler = ({email, id}) => {
    console.log(email)
  }

  useEffect(()=>{
    socket.on("user:joined", userHandler);
    return ()=> {
      socket.off("user:joined", userHandler)
    }
  },[socket, userHandler]);

  return (
    <div className="">
      <h1>Room page {router?.id} </h1>
    </div>
  )
}

export default RoomPage;