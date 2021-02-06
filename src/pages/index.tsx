import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta title="Autofficina Boggian Matteo" description="Autofficina Boggian Matteo" />}>
   <img src={`${process.env.baseUrl}/assets/images/autofficina-banner5.png`} alt="Autofficina" />
    <p/>
    <p></p>
    <ul>
      <li>
    
        
        <p className="mx-8 my-8">
        
         <h1 className="font-bold text-sm">Autofficina
         {' '} 
          <span role="img" aria-label="wrench">
            🔧
          </span>
   
          </h1>
          <p className="mx-8 my-8 text-justify font text-sm" >
          La nostra autofficina opera a Merlara dal 1992, da sempre attenta a soddisfare le esigenze
          dei nostri clienti, in costante evoluzione ed aggiornamento tecnico. E’ dotata delle più
          moderne attrezzature e strumentazioni per eseguire servizi di autodiagnosi, riparazione e
          manutenzione di autoveicoli e trattori. Disponiamo di auto sostitutiva. Chiedici un
          preventivo gratuito e prova la qualità dei nostri servizi. Ti forniremo garanzia sul
          lavoro effettuato, qualità e competenza.
          </p>
      
         </p>
    
      </li>
      <li>
      <p className="mx-8 my-8">
           <h1 className="font-bold text-sm">Vendita auto
           {' '}
     
          <span role="img" aria-label="hundred">
          💯
          </span>
          </h1>
          <p className="mx-8 my-8 text-justify font text-sm" >
          Se cerchi un’auto usata in ottime condizioni e garantita vieni a trovarci o contattaci per
          visionare le nostre occasioni.
          </p>
        </p>
      </li>
    </ul>  
  </Main>
);

export default Index;
