import React from 'react'

export default async function MyProductsPage() {

    const res = await fetch('http://localhost:3000/api/myAddProducts');
    const data = await res.json()
    console.log(data);

    return (
        <div className="overflow-x-auto px-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        data.map((singleData, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{singleData.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleData.description}
                                        <br />
                                    </td>
                                    <td>{singleData.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Update</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
