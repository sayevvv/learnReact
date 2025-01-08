import { createContext, useContext } from "react"

interface typeCon {
  judul : string
}

export const ContextSatu = createContext<typeCon | null >(null);

export const useContextSatu = () => {
  const value = useContext(ContextSatu);
  if(value === null){
    throw new Error("Harus di dalam provider");
  }
  return value;
 }