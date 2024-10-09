import NewItem from "./new-item";
import Link from "next/link";

export default function FourPage(){

    return(

        <main className="h-screen flex flex-col items-center justify-center">
            
            <Link className = "text-blue-400" href="..">Home</Link>

            <div className="bg-cyan-400 w-1/3 flex flex-col items-center justify-center">
                <h1 className="text-2xl m-4">Item Quantity</h1>
                <NewItem></NewItem>
            </div>
        </main>
    )
}