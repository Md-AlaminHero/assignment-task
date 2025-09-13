import React from 'react'
import UpdateProductForm from '../components/updateProductForm';

export default async function UpdateProductPage({ params }) {
    const p = await params.id;
    const res = await fetch(`http://localhost:3000/api/myAddProducts/${p}`);
    const data = await res.json();
    return (
        <UpdateProductForm data={data}></UpdateProductForm>
    )
}
