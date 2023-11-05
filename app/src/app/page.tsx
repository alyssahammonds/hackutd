import React from 'react';
import Navbar from './components/NavBar';
import MarketPerformance from './components/MarketPerformance';
import Welcome from './components/Welcome';
import News from './components/News';

export default function Home() {
  return (
    <main>
      <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      <Navbar />
      <Welcome />
      <MarketPerformance />
      <News />
    </main>
  )
}
