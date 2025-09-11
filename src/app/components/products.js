
import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function ProductsPage() {
    const dbCollection = dbConnect("test-data");
    const data = await dbCollection.find().toArray();
    console.log(data);
  return (
    <div>ProductsPage</div>
  )
}
