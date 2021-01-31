import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: { lat: 35.717, lng: 139.731 },
    }
  );
}

const Position = () => (
  <Main meta={<Meta title="Dove siamo" description="Dove siamo" />}>
       <a href="http://boggianmatteo.it">
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner1.png`}
        alt="Autofficina"
      />
    </a>
    <p></p>
    <h1 className="font-bold text-2xl">Ecco dove ci trovi:</h1>
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
    <h1 className="font-bold text-2xl">Ti aspettiamo!</h1>
  </Main>
);

export default Position;
