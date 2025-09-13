"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function DeleteButton({ id }) {
    const router = useRouter();
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/api/myAddProducts/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        // router.refresh()
        console.log(data);
        if (data.deletedCount) {
            Swal.fire({
                title: "Successfully Deleted",
                icon: "success",
                draggable: true
            });
            router.refresh()
        }
    }

    return (
        <div>
            <button onClick={() => handleDelete(id)} className="btn btn-ghost btn-xs">Delete</button>
        </div>
    )
}
