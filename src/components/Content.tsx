import { ReactNode } from 'react';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  link: string;
}

const Content = ({ children, link }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-60 py-3 px-5 pt-10 gap-8 rounded-xl bg-slate-100">
        <img className="h-full" src={reactLogo} alt="logo 1" />
        <p className="font-semibold h-full">{children}</p>
        <Link className="inline-flex items-center h-full" to={link}>
          Go to {link}
        </Link>
      </div>
    </>
  );
};

export default Content;
