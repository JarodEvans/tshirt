import React from 'react';
import whiteShirt from '../assets/whiteshirt.jpg';
import greenShirt from '../assets/greenShirt.jpg';
import blackShirt from '../assets/blackShirt.jpg';
import dragonShirt from '../assets/dragonShirt.jpg';
import Image from 'next/dist/client/image';

const products = [
    {
      id: 1,
      name: 'White Shirt',
      href: '/product',
      price: '$48',
      imgSrc: whiteShirt,
      imageAlt: 'White Shirt',
    },
    {
      id: 2,
      name: 'Green Shirt',
      href: '/product',
      price: '$35',
      imgSrc: greenShirt,
      imageAlt: 'Green Shirt',
    },
    {
      id: 3,
      name: 'Black Shirt',
      href: '/product',
      price: '$89',
      imgSrc: blackShirt,
      imageAlt: 'Black Shirt',
    },
    {
      id: 4,
      name: 'Dragon Shirt - Crop',
      href: '/product',
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
              <a key={product.id}
               href={product.href}
                className="group"
                >
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