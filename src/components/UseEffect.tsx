import { useState, useEffect } from "react";

const UseEffect = () => {
  const [satu, tambahSatu] = useState(-1);
  const [dua, tambahDua] = useState(-1);
  const [tiga, tambahTiga] = useState(-1);

  useEffect(() => {
    console.log("Component 1 mounted");
  }, [satu]);
  useEffect(() => {
    console.log("Component 2 mounted");
  }, [dua]);
  useEffect(() => {
    console.log("Component 3 mounted");
  }, [tiga]);

  return (
    <>
      <div className="flex w-full gap-5 mt-4">
        <button className="px-5 py-2 bg-red-500 text-white rounded-md" onClick={() => tambahSatu(satu + 1)}>button 1</button>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-md" onClick={() => tambahDua( dua + 1)}>button 2</button>
        <button className="px-5 py-2 bg-green-500 text-white rounded-md" onClick={() => tambahTiga(tiga + 1)}>button 3</button>
      </div>
    </>
  );
};

export default UseEffect;
