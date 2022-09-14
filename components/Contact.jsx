import React from 'react';

export default function Contact() {
    return (
        <div className='max-w-[1240px] m-auto p-4 h-full'>
            <h1 className='text-2xl font-bold text-center p-4'> Enter your details and send us a message! </h1>
            <form className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3' type='text' placeholder='Name' />
                    <input className='border shadow-lg p-3' type='email' placeholder='Email' />
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject' />
                <textarea className='border shadow-lg p-3 w-full' name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
                <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            </form>
            <div className='max-w-[1240px] m-auto p-4 h-full'>
                <form className='max-w-[600px] m-auto'>
                <h2 className='text-2xl font-bold text-center p-4'> or Contact us directly </h2>
                <h3 className='text-1xl font-bold text-left p-4'>Phone number: 555 555 555</h3>
                <h3 className='text-1xl font-bold text-left p-4'>Email: example@email.com</h3>
                <p className='p-4'>Call us anytime about our suppliers, prices, locations etc.</p>
                </form>
            </div>
        </div>
    );
  }