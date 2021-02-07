
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Position = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner8.png`}
        alt="Autofficina"
      />
    <p className="text-sm">
      <h1 className="my-8 font-bold">Indirizzo
      <span role="img" aria-label="home">🏠</span>
      </h1>
      <ul>
        <li>
          Via Stradona, 808
        </li>
        <li>35040 Merlara (PD)</li>
      </ul>
      <h1 className="font-bold">Ti aspettiamo!</h1>
      </p>
  </Main>
);

export default Position;
