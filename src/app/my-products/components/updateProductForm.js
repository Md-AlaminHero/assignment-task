"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function UpdateProductForm({ data }) {
    console.log(data);
    const { _id, description, name, price } = data;

    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        // console.log({ name, description, price });
        const productInfo = {
            name,
            description,
            price
        }

        const res = await fetch(`http://localhost:3000/api/myAddProducts/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(productInfo)
        });
        const postedResponse = await res.json();
        // router.push('/my-products')
        console.log("UPDATED", postedResponse);
        if (postedResponse.modifiedCount) {
            Swal.fire({
                title: "Successfully Updated",
                icon: "success",
                draggable: true
            });
            router.push('/my-products')
        }

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body w-full mx-auto">
                    <h1 className='text-center'>Update Your Product</h1>
                    <form onSubmit={handleUpdate} className="fieldset">
                        {/* name input */}
                        <label className="label">Product Name</label>
                        <input type="text" name='name' defaultValue={name} className="input" placeholder="Enter Product Name" required />

                        {/* description input */}
                        <label className="label">Product Description</label>
                        <input type="text" name='description' defaultValue={description} className="input" placeholder="Description" required />

                        {/* Price input */}
                        <label className="label">Price</label>
                        <input type="number" name='price' defaultValue={price} className="input" placeholder="Price" required />
                        <button type='submit' className="btn btn-neutral mt-4">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
