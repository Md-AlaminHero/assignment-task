import MealSearchInput from "./mealSearchInput";


export default async function FetchMeals({ searchParams }) {
    const query = await searchParams;
    console.log(query);
    // const meals = [];

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data.meals;
        } catch (error) {
            console.log(error);
            return []
        }
    }

    const meals = await fetchMeals();
    console.log(meals);

    return (
        <div>
            <MealSearchInput />
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
