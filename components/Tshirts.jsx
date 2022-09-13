import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import jordans from '../assets/jordans.avif';
import whiteShirt from '../assets/whiteshirt.jpg';
import greenShirt from '../assets/greenShirt.jpg';
import blackShirt from '../assets/blackShirt.jpg';
import dragonShirt from '../assets/dragonShirt.jpg';
import Image from 'next/dist/client/image';

const products = [
    {
      id: 1,
      name: 'White Shirt',
      href: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price: '$48',
      imgSrc: whiteShirt,
      imageAlt: 'White Shirt',
    },
    {
      id: 2,
      name: 'Green Shirt',
      href: 'https://images.unsplash.com/photo-1489913590284-9269438bb411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      price: '$35',
      imgSrc: greenShirt,
      imageAlt: 'Green Shirt',
    },
    {
      id: 3,
      name: 'Black Shirt',
      href: 'https://images.unsplash.com/photo-1527534085786-f44cde0659a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      price: '$89',
      imgSrc: blackShirt,
      imageAlt: 'Black Shirt',
    },
    {
      id: 4,
      name: 'Dragon Shirt - Crop',
      href: "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price: '$35',
      imgSrc: dragonShirt,
      imageAlt: 'Dragon Shirt',
    },
  ]

export default function Tshirt() {
    return (
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imgSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }