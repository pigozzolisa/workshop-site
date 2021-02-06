import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';


const Contacts = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner5.png`}
        alt="Autofficina"
      />
    <p className="mx-8 my-8">
    <h1 className="my-8 font-bold text-sm">Contatti    <span role="img" aria-label="pencil">
    🖌️
    </span>
    </h1>
    <ul className="font text-sm">
      <li>
      <span role="img" aria-label="telephone">
      ☎️ 
      </span>
      
      <span className="mr-5"> 0429 85106</span>
      </li>
      <li>
      <span role="img" aria-label="envelope_with_arrow">
      📩
      </span>
      <span className="mr-5"> boggian.matteo@gmail.com</span>
      </li>
      <p></p>
      <li> CF: BGGMTT69E03F394G</li>
      <li> P.IVA: 01412660282</li>
    </ul>
    </p>
  </Main>
);

export default Contacts;
