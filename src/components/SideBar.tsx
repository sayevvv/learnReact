import React from "react";

const SideBar = () => {
  return (
    <div className="items-center md:block md:w-20 lg:w-64 bg-white h-screen fixed border-r transition-all duration-300 ease-in-out">
      <ul className="w-full h-screen flex flex-col items-center justify-between">
        <div>
          <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
            Sidebar Item 1
          </li>
          <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
            Sidebar Item 2
          </li>
          <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
            Sidebar Item 3
          </li>
          <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
            Sidebar Item 4
          </li>
          <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
            Sidebar Item 5
          </li>
        </div>
        <li className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl">
          Exit
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
