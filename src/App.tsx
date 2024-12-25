import { useState } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <NavBar />

      <section className="flex flex-col justify-center items-center gap-36 mt-20">
        {/* Component 1, 2, 3 */}
        <h1 className="font-sans text-3xl font-semibold flex items-center">
          BELAJAR <span className="text-blue-400 ml-2">DEK</span>, JANGAN
          REBAHAN AJA!
        </h1>

        <div className="flex justify-center items-center gap-5">
          <Content>useState</Content>
          <Content>useReduce</Content>
        </div>
      </section>
    </>
  );
}

export default App;
