import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';


const Contacts = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
   <p className="mx-2">
      <img className="object-contain md:object-scale-down" src={`${process.env.baseUrl}/assets/images/autofficina-banner8.png`}
              alt="Autofficina"
      />
    <h1 className="mx-5 my-5 font-bold">Contatti
    <span role="img" aria-label="pencil">🖌️</span>
    </h1>
    <ul className="mx-5">
   
      <li>
      <span role="img" aria-label="telephone">☎️</span>
      {' '}
      <span className="mr-5">
      0429 85106
      {' '}    <a href="tel:+39042985106">Chiamaci!</a>
      </span>

      </li>
      <li>
      <span role="img" aria-label="envelope_with_arrow">📩</span>
      {' '}
      <span className="mr-5">boggian.matteo@gmail.com</span>
      </li>
      <p></p>
      <li> CF: BGGMTT69E03F394G</li>
      <li> P.IVA: 01412660282</li>
    </ul>
  </p>
  </Main>
);

export default Contacts;
