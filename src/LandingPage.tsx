import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Modal from "./components/Modal";
import reactLogo from './assets/react.svg';
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseEffect from "./components/UseEffect";



const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHook, setCurrentHook] = useState("");

  const hookDetails: Record<string, string> = {
    useState: "useState allows you to add state to functional components.",
    useReducer: "useReducer is an alternative to useState for complex state logic.",
    useEffect: "useEffect runs side effects in your components.",
    useContext: "useContext provides a way to pass data through the component tree.",
    useRef: "useRef accesses DOM elements or keeps mutable references."
  };

  const hookExamples: Record<string, any> = {
    useState: <UseState/>,
    useReducer: <UseReducer />,
    useEffect: <UseEffect />
  }

  const openModal = (hookName: string) => {
    setCurrentHook(hookName);
    setIsModalOpen(true);
  };

  return (
    <div>
      <NavBar />
      <section className="flex flex-col justify-center items-center gap-20 mt-20 bg-slate-50 border-2 border-slate-400 py-10 mx-8 rounded-2xl">
        <h1 className="font-sans text-3xl font-semibold flex items-center">
          BELAJAR <span className="text-blue-400 ml-2">DEK</span>, JANGAN
          REBAHAN AJA!
        </h1>
        <section className="gap-8 flex flex-col items-center">
          <h2 className="font-sans ">HOOKS</h2>
          <div className="flex justify-center items-center gap-5">
            {Object.keys(hookDetails).map((hook) => (
              <div className="flex flex-col gap-5 justify-start">
              <img src={reactLogo} alt="logo" className="h-20" />
              <button
                key={hook}
                onClick={() => openModal(hook)}
                className="bg-blue-400 text-white py-2 px-4 rounded"
              >
                {hook}
              </button>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Link to="/page2" className="flex items-center justify-center mt-20 hover:text-violet-500">Go to Page 2</Link>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">{currentHook}</h2>
        <p>{hookDetails[currentHook]}</p>
        <div>{hookExamples[currentHook]}</div>
      </Modal>
    </div>
  );
};

export default LandingPage;
