"use client"
import { useState } from "react";
import NewItem from "../week-4/new-item";

export default function FormSub(){

    //Styling for quantity buttons
    let minusStyle = "bg-red-600 rounded-md ml-2 w-10";
    let plusStyle = "bg-green-500 rounded-md w-10";
    
    //Use state for quantity
    const [quantity, setQuantity] = useState(1);
  
    //Changes color of quantity buttons
    if(quantity >= 20){
      plusStyle = "bg-gray-400 rounded-md w-10";
    }
  
    if(quantity <= 1){
      minusStyle = "bg-gray-400 rounded-md ml-2 w-10";
    }

    //Increases the value of quantity as long as it is below 20
    const incrementCounter = (event) => {
      event.preventDefault();
      let newCount = quantity;
  
      if (quantity < 20) {
        setQuantity(newCount + 1);
        
      }
    };
  
    //Decrease the value of quantity as long as it is above 1
    const decrementCounter = (event) => {
      event.preventDefault();
      let newCount = quantity;
  
      if (quantity > 1) {
        setQuantity(newCount - 1);
        minusStyle = "bg-gray-400 rounded-md m-4 w-10";
      }
    };

    //Use states for name and category
    const[name, setName] = useState("");
    const[category, setCategory] = useState("Produce");

    //Wiring for useStates
    const handleNameChange = (event) =>{setName(event.target.value);}
    const handleCategoryChange = (event) =>{setCategory(event.target.value);}
    
    //Uses an alert to display the selected values for name, quantity, and category
    const handleSubmit = (event) =>{
    
        //Sets values for productName, productQuantity, and productCategory to name,quantity and category
        const product={

            productName: name,
            productQuantity: quantity,
            productCategory: category
        };

        if (name.trim() === "") {
            alert("Please enter a name.");
            return; // Prevent form submission
          }
          
        //Uses an alert to display the values of our variable
        alert(`
            Name: ${product.productName} /
            Quantity: ${product.productQuantity} /
            Category: ${product.productCategory}
            `);

        //Resets values for variables    
        setName("");
        setQuantity(1);
        setCategory("Produce");
        
    }

    return(
        //Creates a form interface
        <form onSubmit={handleSubmit}>  {/* calls handleSubmit to override default submit functionality */}
           
            {/*Name field, updates name value when field is changed */}
            <div className='text-cyan-400'>
                <label className='pr-4'>Name: </label>
                <input type='text' onChange={handleNameChange}></input>
            </div>

            {/**Quantity button interface. Keeps track of quantity value */}
            <div className='text-purple-500 pl-24 m-5'>
                <label className>Quantity</label>
                    
                    <div>
      
                        <p className='pl-7'>{quantity}</p>

                    
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
            </div>

            <div>
                <label className='pr-2'>Category</label>
                <select className='text-red-500 w-48 text-center' onChange={handleCategoryChange}>
                    <option select value="Produce">Produce</option>
                    <option value ="Dairy">Dairy</option>
                    <option value ="Bakery">Bakery</option>
                    <option value ="Meat">Meat</option>
                    <option value ="Frozen Foods">Frozen Foods</option>
                    <option value ="Canned Goods">Canned Goods</option>
                    <option value ="Beverages">Beverages</option>
                    <option value ="Snacks">Snacks</option>
                    <option value ="Household">HouseHold</option>
                    <option value ="Other">Other</option>
                   
                </select>

            </div>


            <div name="Submit">
                <button className="bg-cyan-500 rounded-md align-middle ml-32" >Submit</button>
            </div>

            
        </form>
    );
}