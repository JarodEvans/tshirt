import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import jordans from '../assets/jordans.avif';

export default function Tshirt() {
    return (
        <Welcome heading='Tshirts' message='Search products.' image={jordans} />
    )
  }