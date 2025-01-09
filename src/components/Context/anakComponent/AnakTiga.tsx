import { useContextDua } from "../ContextIndex";

import React from 'react'

const AnakTiga = () => {

  const anak3 = useContextDua();

  return (
    <div>
      {anak3.judul}
    </div>
  )
}

export default AnakTiga