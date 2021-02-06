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
    <p className="mx-8 my-8">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
       
        <h1 className="text-2xl tracking-tight font-bold sm:text-xl md:text-2xl">
         <div className="text-2xl font-black">
          {Config.title}
       </div>
        </h1>
       
       <h2 className="text-lg tracking-tight font-bold sm:text-lg md:text-lg">
       <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-lg font-black">
          {Config.description}
       </div>
       </h2>  
        </div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-yellow-400 ">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contacts/">
                <a className="text-gray-700 border-none hover:text-red-500">Contatti</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/position">
                <a className="text-gray-700 border-none hover:text-pink-500">Dove siamo</a>
              </Link>
            </li>
          </ul>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
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
      </p>
    </div>
  </div>
);

export { Main };
