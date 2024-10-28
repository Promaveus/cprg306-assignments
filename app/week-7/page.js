"use client"
import ItemList from "./item-list";
import Link from "next/link";
import itemData from "./items.json";
import {useState} from "react";
import FormSub from "./new-item";


export default function Page(){

    //Initialize items array with the data from the json file
    const[items, setItems] = useState(itemData);

    //Add new item to the items array
    const handleAddItem = (item) =>{
        setItems((items) => [...items, item]);
    }
    //Displays the ItemList
    return(
        <h1 className="text-4xl font-bold text-cyan-500 place-items-center"> Shopping List
            <p>
                <Link className = "text-blue-400" href="..">Home</Link>
            </p>
            <main>
                <FormSub onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </main>
        </h1>
    )
}