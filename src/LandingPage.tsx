import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import reactLogo from "./assets/react.svg";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseEffect from "./components/UseEffect";
import { useTheme } from "./theme/ThemeContext";

const LandingPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHook, setCurrentHook] = useState("");

  const hookDetails: Record<string, string> = {
    useState: "useState allows you to add state to functional components.",
    useReducer:
      "useReducer is an alternative to useState for complex state logic.",
    useEffect: "useEffect runs side effects in your components.",
    useContext:
      "useContext provides a way to pass data through the component tree.",
    useRef: "useRef accesses DOM elements or keeps mutable references.",
  };

  const hookExamples: Record<string, any> = {
    useState: <UseState />,
    useReducer: <UseReducer />,
    useEffect: <UseEffect />,
  };

  const openModal = (hookName: string) => {
    setCurrentHook(hookName);
    setIsModalOpen(true);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
      theme === "light" ? "bg-white" : "bg-gray-900"
    }`}>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4">
          Current Theme: <span className="capitalize">{theme}</span>
        </h1>
        <button
          className={`px-4 py-2 rounded ${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      <div className="flex justify-center">
        <section className="flex flex-col justify-center items-center gap-20 mt-20 bg-slate-50 border-2 border-slate-400 py-10 w-max px-8 rounded-2xl">
          <h1 className="font-sans text-3xl font-semibold flex items-center">
            BELAJAR <span className="text-blue-400 ml-2">DEK</span>, JANGAN
            REBAHAN AJA!
          </h1>
          <section className="gap-8 flex flex-col items-center">
            <h2 className="font-sans font-semibold">HOOKS</h2>
            <div className="flex justify-center items-center gap-5">
              {Object.keys(hookDetails).map((hook) => (
                <div className="flex flex-col gap-5 justify-start">
                  <img src={reactLogo} alt="logo" className="h-20" />
                  <button
                    key={hook}
                    onClick={() => openModal(hook)}
                    className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500"
                  >
                    {hook}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      <Link
        to="/page2"
        className="flex items-center justify-center mt-20 hover:text-violet-500"
      >
        Go to Page 2
      </Link>

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
