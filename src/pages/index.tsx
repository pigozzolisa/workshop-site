import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta title="Autofficina Boggian Matteo" description="Autofficina Boggian Matteo" />}>
    <a href="http://boggianmatteo.it">
      <img src={`${process.env.baseUrl}/assets/images/autofficina-banner.png`} alt="Autofficina" />
    </a>
    <p/>
    <p></p>
    <ul>
      <li>
        <p>
          <span role="img" aria-label="wrench">
            🔧
          </span>
          {' '}
          <span role="img" aria-label="automobile">
            🚗
          </span>
          {' '}
          <span role="img" aria-label="delivery_track">
            🚚
          </span>
          {' '}
          <span role="img" aria-label="tractor">
            🚜
          </span>
          {' '}
          <span role="img" aria-label="motorcycle">
            🏍️
          </span>
          {' '} <h1 className="font-bold text-2xl">Autofficina specializzata con autodiagnosi</h1>
          <p></p>
          La nostra autofficina opera a Merlara dal 1992, da sempre attenta a soddisfare le esigenze
          dei nostri clienti, in costante evoluzione ed aggiornamento tecnico. E’ dotata delle più
          moderne attrezzature e strumentazioni per eseguire servizi di autodiagnosi, riparazione e
          manutenzione di autoveicoli e trattori. Disponiamo di auto sostitutiva. Chiedici un
          preventivo gratuito e prova la qualità dei nostri servizi. Ti forniremo garanzia sul
          lavoro effettuato, qualità e competenza.
        </p>
        <a href="http://boggianmatteo.it">
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-diagnosi.jpg`}
        alt="Autofficina"
      />
    </a>
      </li>
      <li>
        <p>
          <span role="img" aria-label="oncoming_automobile">
            🚘
          </span>
          {' '}
          <span role="img" aria-label="top">
            🔝
          </span>
          {' '} <h1 className="font-bold text-2xl">Vendita auto</h1>
          <p></p>
          Se cerchi un’auto usata in ottime condizioni e garantita vieni a trovarci o contattaci per
          visionare le nostre occasioni.
        </p>
      </li>
    </ul>
    
  </Main>
);

export default Index;
