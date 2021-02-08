
import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
//import MapContainer from '../MapContainer';


const Position = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
    
    <p className="mx-2">
    <div className="md:flex-shrink-0">
      <img className="object-contain md:object-scale-down" src={`${process.env.baseUrl}/assets/images/autofficina-banner8.png`}
              alt="Autofficina"
      />
      </div>
      <h1 className="mx-5 my-5 font-bold">Indirizzo
      <span role="img" aria-label="home">🏠</span>
      </h1>
      <a className="mx-5" target="_blank" href="https://maps.google.com/maps?ll=45.161712,11.451835&amp;z=17&amp;t=m&amp;hl=it-IT&amp;gl=US&amp;mapclient=apiv3&amp;cid=15682584753123289441"> <span>Visualizza su Google Maps</span></a>
      <ul className="flex flex-wrap mx-5" >
        <li>
          Via Stradona, 808
        </li>
        <li>35040 Merlara (PD)</li>
      
      </ul>
      <h1 className="mx-5 font-bold">Ti aspettiamo!</h1>
    </p>
  </Main>
);

export default Position;
