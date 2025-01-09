import { useContext } from "react";
import { ContextSatu } from "./ContextIndex";
import { ContextDua } from "./ContextIndex";
import ComponentBuatParaContext from "./ComponentBuatParaContext";

const AppContext = () => {
  return (
    <div>
      <ContextSatu.Provider value={{ judul: "ini judul dari context" }}>
        <ContextDua.Provider value={{ judul: "ini judul dari context dua" }}>
          <ComponentBuatParaContext />
        </ContextDua.Provider>
      </ContextSatu.Provider>
    </div>
  );
};

export default AppContext;
