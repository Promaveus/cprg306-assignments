"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    //Renders the list based on the sorting algorithm
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
        return 0;
    });

    return (
        <div>
            <h1>Sorted By <span className="text-yellow-500">{sortBy}</span> Item List</h1>
            <button onClick={() => setSortBy("name")} className="bg-yellow-500 rounded-md m-2">Sort By Name</button>
            <button onClick={() => setSortBy("category")} className="bg-yellow-500 rounded-md text-white m-2">Sort By Category</button>
            
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} item={item} onSelect={onItemSelect} />
                ))}
            </ul>
        </div>
    );
}
