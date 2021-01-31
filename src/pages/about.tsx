import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="L'autofficina" description="L'autofficina" />}>
     <a href="http://boggianmatteo.it">
      <img
        src={`${process.env.baseUrl}/assets/images/autofficina-banner1.png`}
        alt="Autofficina"
      />
    </a>
    
    
    
    
   
  </Main>
);

export default About;
