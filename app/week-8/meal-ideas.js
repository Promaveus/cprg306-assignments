"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Fetch data from the API
    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    }

    // Load meals based on ingredient
    async function loadMealIdeas(ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    // Fetches new list of meals based on ingredient changes
    useEffect(() => {
     
        if (ingredient) {
            loadMealIdeas(ingredient);
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h1>
            
            {/* Displays a message if ingredient has no meals associated with it in the API */}
            {meals.length === 0 && (
                <p>No meals found for this ingredient</p>
            )}
            
            {/* Generates list of meals for ingredient */}
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal} className="mb-4">
                        <h2 className="text-lg font-semibold text-white">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-32 h-32 object-cover rounded" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
