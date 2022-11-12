import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne } from './Data';
import Footer from '../Footer'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Footer/>
    </>
  );
}

export default Home;