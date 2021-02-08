import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta title="Autofficina Boggian Matteo" description="Autofficina Boggian Matteo" />}>
   <p className="mx-2">
      <img className="object-contain md:object-scale-down" src={`${process.env.baseUrl}/assets/images/autofficina-banner8.png`}
              alt="Autofficina"
      />
   
    <ul className="mx-5 my-5">
      <li>  
         <h1 className="font-bold">Autofficina
          <span role="img" aria-label="wrench">🔧</span>
          </h1>
          <p className="text-justify" >
          La nostra autofficina opera a Merlara dal 1992, da sempre attenta a soddisfare le esigenze
          dei nostri clienti, in costante evoluzione ed aggiornamento tecnico. E’ dotata delle più
          moderne attrezzature e strumentazioni per eseguire servizi di autodiagnosi, riparazione e
          manutenzione di autoveicoli e trattori. Disponiamo di auto sostitutiva. Chiedici un
          preventivo gratuito e prova la qualità dei nostri servizi. Ti forniremo garanzia sul
          lavoro effettuato, qualità e competenza.
          </p>
      </li>
      <li>
           <h1 className="font-bold">Vendita auto
          <span role="img" aria-label="hundred">💯</span>
          </h1>
          <p className="text-justify">
          Se cerchi un’auto usata in ottime condizioni e garantita vieni a trovarci o contattaci per
          visionare le nostre occasioni.
          </p>
      </li>
    </ul>  
    </p>
  </Main>
);

export default Index;
