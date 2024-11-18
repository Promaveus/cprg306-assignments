import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Get items for a specific user from Firestore
export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsRef);
    const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return itemsList;
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
};

// Add a new item to a specific user's list in Firestore
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;  // Return the id of the newly created document
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
};
