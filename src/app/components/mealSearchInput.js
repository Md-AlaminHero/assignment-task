"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {

    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        // console.log(urlQueryParam);
        const url = `${pathName}?${urlQueryParam}`;
        router.push(url);
    }, [search])

    return (
        <div>
            <div className=' flex justify-center py-10'>
                <input
                    className='text-blue-500 bg-green-300'
                    value={search}
                    onChange={(e) => { 
                        setSearch(e.target.value)
                    }} />
            </div>
        </div>
    )
}
