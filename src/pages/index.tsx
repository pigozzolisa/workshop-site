import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta title="Autofficina Boggian Matteo" description="Autofficina Boggian Matteo" />}>
    <a href="http://boggianmatteo.it">
      <img src={`${process.env.baseUrl}/assets/images/autofficina-banner.png`} alt="Autofficina" />
    </a>
    <p />
    <h1 className="font-bold text-2xl">Dove siamo:</h1>
    <ul>
      <li>
        <span role="img" aria-label="home">
          🏠
        </span>
        {' '}
        Via Stradona, 808
      </li>
      <li>35040 Merlara (PD)</li>
    </ul>
    <h1 className="font-bold text-2xl">Contatti:</h1>
    <ul>
      <li>
        <span role="img" aria-label="telephone">
          ☎️
        </span>
        {' '}
        Tel: 0429 85106
      </li>
      <li>
        <span role="img" aria-label="envelope_with_arrow">
          📩
        </span>
        {' '}
        Email: boggian.matteo@gmail.com
      </li>
      <li> CF: BGGMTT69E03F394G</li>

      <li> PIVA: 01412660282</li>
    </ul>
  </Main>
);

export default Index;
