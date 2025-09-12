import Image from 'next/image';
import React from 'react'

export default async function ProductPage({ params }) {
    const p = await params.id;
    const res = await fetch(`http://localhost:3000/api/product/${p}`);
    const data = await res.json();
    console.log(data);
    const { description, image, name, price } = data;
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    alt={name}
                    src={image}
                    width={400}
                    height={200}
                    className='rounded-xl'
                />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <button className="btn btn-primary rounded-xl hover:text-yellow-400">Price: {price}$</button>
                </div>
            </div>
        </div>
    )
}
