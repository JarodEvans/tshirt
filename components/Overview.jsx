import React from 'react';
import Image from 'next/image';
import dudeBike from '../assets/dudeBike.avif'
import dude2 from '../assets/dude2.avif'
import dude3 from '../assets/dude3.avif'
import notadude from '../assets/notadude.avif'
import coupleofdudes from '../assets/coupleofdudes.avif'

const Overview = () => {
    return ( 
        <div className='max-w-[1240px] mx-auto py-16 px-4'>
            <h1>The fits in real life.</h1>
            <p>On the streets, for the streets</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <Image className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={coupleofdudes} alt='/' />
                <Image className='w-full h-full object-cover' src={dudeBike} alt='/' />
                <Image className='w-full h-full object-cover' src={dude2} alt='/' />
                <Image className='w-full h-full object-cover' src={dude3} alt='/' />
                <Image className='w-full h-full object-cover' src={notadude} alt='/' />
            </div>
        </div>
     );
}
 
export default Overview;