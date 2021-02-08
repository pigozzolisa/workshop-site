import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-black-900">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-8 pb-8">
        <h1 className="text-lg tracking-tight font-bold sm:text-xl md:text-lg">
         <div className="text-lg font-black">
          {Config.title}
         </div>
        </h1>
       <h2 className="text-lg tracking-tight font-bold sm:text-lg md:text-lg">
       <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-lg font-black">
          {Config.description}
       </div>
       </h2>  
        </div>
          <ul className="flex flex-wrap text-lg">
            <li className="mr-5">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-yellow-400 ">Home</a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/contacts/">
                <a className="text-gray-700 border-none hover:text-red-500">Contatti</a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/position">
                <a className="text-gray-700 border-none hover:text-pink-500">Dove siamo</a>
              </Link>
            </li>
          </ul>
      </div>

      <div className="py-2 text-sm content">{props.children}</div>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-80 text-center py-1">
       </div> 
      <div className="text-center py-5 text-xs">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        . Powered with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by Lisa Pigozzo
      </div>
    </div>
  </div>
);

export { Main };
