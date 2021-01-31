import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';


const Contacts = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
       <a href="http://boggianmatteo.it">
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner1.png`}
        alt="Autofficina"
      />
    </a>
    <p></p>
    <h1 className="font-bold text-2xl">Chiamaci o scrivici!</h1>
    <ul>
      <li>
        <span role="img" aria-label="telephone">
          ☎️
        </span>
        {' '}0429 85106
      </li>
      <li>
        <span role="img" aria-label="envelope_with_arrow">
          📩
        </span>
        {' '}boggian.matteo@gmail.com
      </li>
      <p></p>
      <li> CF: BGGMTT69E03F394G</li>

      <li> P.IVA: 01412660282</li>
    </ul>
  </Main>
);

export default Contacts;
