// import React from 'react'
import { useContextSatu } from "../ContextIndex"

const AnakDua = () => {
  const anak2 = useContextSatu();
  return (
    <div>AnakDua KUU : {anak2.judul}</div>
  )
}

export default AnakDua