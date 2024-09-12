"use client"

import { useParams } from "next/navigation"

export const RoomPage = () => {
  
  const router = useParams();
  

  return (
    <div className="">
      <h1>Room page {router?.id} </h1>
    </div>
  )
}

export default RoomPage;