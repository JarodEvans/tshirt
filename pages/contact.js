import React from 'react';
import Welcome from '../components/Welcome';
import store from '../assets/store.avif';
import Contact from '../components/Contact';


 const contact = () => {
    return ( 
        <div>
            <Welcome heading="Contacts" message="Search our contacts" image={store} searchBar="Search Contacts" />
            <Contact />
        </div>
     );
 }
  
 export default contact;