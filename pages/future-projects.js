import React from 'react';
import Welcome from '../components/Welcome';
import notadude from '../assets/notadude.avif';
import FutureProject from '../components/Future-Projects';


 const futureProjects = () => {
    return ( 
        <div>
            <Welcome heading="Future Projects" message="Search our contacts" image={notadude} searchBar="Search Projects"/>
            <FutureProject />
        </div>
     );
 }
  
 export default futureProjects;