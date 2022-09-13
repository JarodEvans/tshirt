import React from 'react';
import blacktshirt from '../assets/blacktshirt.avif'
import store2 from '../assets/store2.avif'
import Image from 'next/image';
import {AiOutlineSearch} from 'react-icons/ai';

const Welcome = () => {
  return (
    <div className="w-full h-screen relative">
      <Image src={blacktshirt} layout="fill" objectFit="cover" className="w-full h-full" />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>First Class</h1>
          <h2 className="py-4">Ethical Sourcing Locations Worldwide</h2>
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
            <div>
              <input
                className="bg-transparent w-[300px] sm:w-[400px] font-[Sans-serif] focus:outline-none"
                type="text"
                placeholder="Search Designs"
              ></input>
            </div>
            <div>
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default Welcome;