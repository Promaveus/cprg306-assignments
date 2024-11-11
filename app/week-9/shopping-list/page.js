"use client";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import FormSub from "./new-item";
import MealIdeas from "./meal-ideas";
import itemData from "./items.json";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
  
    // Redirect unauthenticated users to the landing page
    useEffect(() => {
        if (!user) {
        router.push("/week-9");
        }
    }, [user, router]);

    // Don't render content if user is not logged in
    if (!user) {
        return null;
    }

    const [items, setItems] = useState(itemData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Add new item to items array
    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    // Removes the icon from the name and sets the selected item
    const handleItemSelect = (item) => {
        const noIconName = item.name.replace(/[^a-zA-Z\s]/g, "").trim();
        setSelectedItemName(noIconName);
    };

    return (
        <div className="flex">
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-cyan-500">Shopping List</h1>
                <FormSub onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 ml-10">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}
