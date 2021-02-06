import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Position = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner5.png`}
        alt="Autofficina"
      />
      <p className="mx-8 my-8">
    <h1 className="mx-8 my-8 font-bold text-sm">Indirizzo
    <span role="img" aria-label="home">
          🏠
        </span>
       </h1>
    <ul className="mx-8 font text-sm">
      <li>
        Via Stradona, 808
      </li>
      <li>35040 Merlara (PD)</li>
    </ul>
    <h1 className="mx-8 font-bold text-sm">Ti aspettiamo!</h1>
 
    </p>
  </Main>
);

export default Position;
