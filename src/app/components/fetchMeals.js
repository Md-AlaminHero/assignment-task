"use client"
import React, { useEffect, useState } from 'react'

export default function FetchMeals() {

    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('')

    const mealsData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setMeals(data?.meals || [])
            return data.meals
        } catch (error) {
            console.log(error);
            return []
        }
    }
    useEffect(() => {
        mealsData()
    }, [search])

    return (
        <div>
            <div className=' flex justify-center'>
                <input className='text-blue-500 bg-green-300' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='grid grid-cols-4 gap-5 w-3/4 mx-auto'>
                {
                    meals?.map((singleMeals) => {
                        return (
                            <>
                                <div>
                                    <h1 className='text-3xl'>{singleMeals.strMeal}</h1>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}
