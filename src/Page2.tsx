import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const Page2: React.FC = () => {
  return (
    <>
        <NavBar />
      <div className="main flex overflow-hidden">
        <div className="fixed h-screen">
          <SideBar />
        </div>
        <div className="flex flex-col h-screen w-screen justify-center items-center">
          <h1>Welcome to Page 2</h1>
          <Link to="/">Back to Landing Page</Link>
        </div>
      </div>
    </>
  );
};

export default Page2;
