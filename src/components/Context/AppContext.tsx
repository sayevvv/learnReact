import { useContext } from "react"
import { ContextSatu } from "./ContextIndex"
import ComponentBuatParaContext from "./ComponentBuatParaContext"

const AppContext = () => {


  return (
    <div>
      <ContextSatu.Provider value={{judul : "ini judul dari context"}}>
        <ComponentBuatParaContext />
      </ContextSatu.Provider>        
    </div>
  )
}

export default AppContext