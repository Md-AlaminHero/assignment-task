
// import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function ProductsPage() {
  // const dbCollection = dbConnect(collectionNameObj.productCollection);
  // const data = await dbCollection.find().toArray();
  // console.log(data);

  const res = await fetch('http://localhost:3000/api/allProducts');
  const data = await res.json();

  return (
    <div className='p-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
      <h1 className='col-span-full text-2xl font-bold mb-4'>
        Total Products: {data.length}
      </h1>

      {
        data.map((singleData, id) => (
          <div key={id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <Image
                src={singleData.image}
                alt={singleData.name}
                width={400}
                height={300}
                className='object-cover'
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleData.name}</h2>
              <p>{singleData.description}</p>
              <p className="font-semibold">${singleData.price}</p>
              <div className="card-actions justify-end">
                <Link href={`/product/${singleData._id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
