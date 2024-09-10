"use client"

import { useParams, useRouter } from "next/navigation"

export const RoomPage = () => {
  
  const router = useParams();

  // console.log(router);
  

  return (
    <div className="">
      <h1>Room page {router?.id} </h1>
    </div>
  )
}

export default RoomPage;