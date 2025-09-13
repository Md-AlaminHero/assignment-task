"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaginationProducts() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const limit = 6; // per page
    const totalPages = Math.ceil(products.length / limit);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:3000/api/allProducts");
            const data = await res.json();
            setProducts(data); // here API returns all products
        };
        fetchData();
    }, []);

    // Slice products for current page
    const startIndex = (page - 1) * limit;
    const currentProducts = products.slice(startIndex, startIndex + limit);

    return (
        <div className="p-6 max-w-9/12 mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Total Products: {products.length}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {currentProducts.map((singleData) => (
                    <div key={singleData._id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <Image
                                src={singleData.image}
                                alt={singleData.name}
                                width={400}
                                height={300}
                                className="object-cover"
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

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="btn"
                >
                    Prev
                </button>
                <span className="px-4 py-2">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
