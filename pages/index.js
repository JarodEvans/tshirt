import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Overview from '../components/Overview';

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Overview />
      <Footer />
    </>
  )
}
