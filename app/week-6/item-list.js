"use client";

import { useState } from "react";
import Item from "./item";
import items from './items.json';

export default function ItemList(){
    const[sortBy, setSortBy] = useState('name');
    const[btn1Style, setB1Style] = useState( "bg-black text-black");
    const[btn2Style, setB2Style] = useState( "bg-yellow-500 rounded-md m-2");

    const sortedItems = [...items].sort((a, b) => {
      //Checks the state of sortBy and renders the list based on what it is set to
      if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });

      //Onclick based on sortBy change the value of sortBy and change the tailwind styling of both buttons
      const handleClick = () =>{

        if(sortBy === 'name'){
            setSortBy('category');
            setB1Style("bg-yellow-500 rounded-md m-2");
            setB2Style("bg-black text-black");
        
        }else if(sortBy === 'category'){
            setSortBy('name');
            setB1Style("bg-black text-black");
            setB2Style("bg-yellow-500 rounded-md m-2");
        };
      }
      return (
        <div>
          {/* Displays what the list is being sorted by currently */}
          <h1>Sorted By <span className="text-yellow-500">{sortBy}</span> Item List</h1>
          
          {/* button displays to change the sorting of the list */}
          <button  className={btn1Style} onClick={handleClick}> Sort By Name</button>
          <button  className={btn2Style} onClick={handleClick}> Sort By Category</button>
         
    
          {/* Display sorted items */}
          <ul>
            {sortedItems.map(item => (
              <li className="bg-white m-4 w-3/4 rounded-lg" key={item.id}>
                {item.name} - {item.category}
              </li>
            ))}
          </ul>
        </div>
      );
}