import { ReactNode } from 'react';
import reactLogo from '../assets/react.svg';

interface Props {
  children: ReactNode;
}

const Content = ({children} : Props) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-28 h-32 py-3 px-2 gap-8 rounded-xl bg-slate-100">
        <img src={reactLogo} alt="logo 1" />
        <p className='font-semibold'>{children}</p>
      </div>
    </>
  );
};

export default Content;
