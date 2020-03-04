
import React from 'react';
import JourneyBuilder from 'components/JourneyBuilder';

import './home.scss';

export default function Home() {
  return (
    <div className="Home">
      <h2> Journey Builder Proof of Concept </h2>
      <JourneyBuilder/>
    </div>
  )
}