import React from 'react';
import Welcome from '../components/Welcome';
import Tshirts from '../components/Tshirts';
import jordans from '../assets/jordans.avif';

 const tshirts = () => {
    return ( 
        <div>
            <Welcome heading="Tshirts" message="Search products." image={jordans} searchBar="Search T-shirts"/>
            <Tshirts />
        </div>
     );
 }
  
 export default tshirts;


