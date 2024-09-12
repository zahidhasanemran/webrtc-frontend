"use client"
import ReactPlayer from  "react-player"
import { useSocket } from "@/context/SocketProvider"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export const RoomPage = () => {

  const [userId, setUserId] = useState(null);
  const [myStream, setMyStream] = useState();
  const router = useParams();
  const socket = useSocket();

  const userHandler = ({email, id}) => {
    console.log(email)
    setUserId(id)
  }

  const handleUserCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
    setMyStream(stream);
  }

  useEffect(()=>{
    socket.on("user:joined", userHandler);
    return ()=> {
      socket.off("user:joined", userHandler)
    }
  },[socket, userHandler]);

  console.log(myStream);
  

  return (
    <div className="">
      <h1>Room page {router?.id} </h1>
      {userId ? <h2>Connected</h2> : <h2>No on in room</h2>}
      {userId && !myStream && <button onClick={handleUserCall}>Call</button>}
      {myStream && <ReactPlayer muted url={myStream} width="150px" height="150px" playing />}
    </div>
  )
}

export default RoomPage;