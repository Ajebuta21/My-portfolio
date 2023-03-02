import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Github = () => {
  return (
    <div className="h-[92vh] w-full flex items-center justify-center mt-[8vh] bg-white">
      <div className="max-md:w-5/6 w-2/5 h-2/5 flex justify-center items-center rounded-full shadow-xl">
      <FaGithub className="pr-2 text-8xl text-slate-900" />
        <span className="max-lg:text-3xl text-5xl text-slate-900">
          Ajebuta21
        </span>
      </div>
    </div>
  );
}

export default Github