import { Link } from "react-router-dom";

interface exitProps{
  exitLink:string,
  capt?:string
}

const SideBar = ({exitLink} : exitProps) => {


  return (
    <div className="hidden md:block md:w-20 lg:w-64 bg-white h-screen fixed border-r transition-all duration-300 ease-in-out">
      <ul className="w-full h-screen flex flex-col items-center justify-between py-5">
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
        <Link className="font-medium w-max hover:bg-slate-100 hover:font-semibold px-5 py-3 rounded-xl" to={exitLink}>
          Exit
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
