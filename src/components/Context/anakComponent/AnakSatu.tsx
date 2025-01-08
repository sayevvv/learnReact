import React from 'react'
import { useContextSatu } from '../ContextIndex'

const AnakSatu = () => {
  const anak1 = useContextSatu();
  return (
    <div>AnakSatu ku : {anak1.judul}</div>
  )
}

export default AnakSatu