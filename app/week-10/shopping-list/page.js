"use client";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import FormSub from "./new-item";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Fetch items from Firestore when the user logs in
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        const userItems = await getItems(user.uid);  // Get items for the logged-in user
        setItems(userItems);
      }
    };

    if (user) {
      fetchItems();
    }
  }, [user]); // Only re-run when `user` changes

  // Redirect unauthenticated users to the landing page
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  // Don't render content if user is not logged in
  if (!user) {
    return null; // Return null while waiting for user authentication status
  }

  // Add new item to Firestore and update the state
  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);  // Add item to Firestore
      setItems((prevItems) => [...prevItems, { id: newItemId, ...item }]);  // Update state with new item
    } catch (error) {
      console.error("Error adding item: ", error);
    }
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
