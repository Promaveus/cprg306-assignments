"use client";

import { useState } from "react";

export default function NewItem() {
  let minusStyle = "bg-red-600 rounded-md m-4 w-10";
  let plusStyle = "bg-green-500 rounded-md m-4 w-10";
  
  const [quantity, setQuantity] = useState(1);

  if(quantity >= 20){
    plusStyle = "bg-gray-400 rounded-md m-4 w-10";
  }

  if(quantity <= 1){
    minusStyle = "bg-gray-400 rounded-md m-4 w-10";
  }
  const incrementCounter = () => {
  
    let newCount = quantity;

    if (quantity < 20) {
      setQuantity(newCount + 1);
      
    }
  };

  const decrementCounter = () => {
  
    let newCount = quantity;

    if (quantity > 1) {
      setQuantity(newCount - 1);
      minusStyle = "bg-gray-400 rounded-md m-4 w-10";
    }
  };

  return (
    <div>
      <p className="align-middle">{quantity}</p>
      <button
        onClick={incrementCounter}
        className={plusStyle}
      >
        +
      </button>
      <button
        onClick={decrementCounter}
        className={minusStyle}
      >
        -
      </button>
    </div>
  );
}
