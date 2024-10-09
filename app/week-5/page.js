import Link from "next/link";
import FormSub from "./new-item";

export default function lab5(){

    return(
        <main className= "h-screen flex flex-col items-center justify-center">
          
            <div className="text-center mb-4">
                
                <Link className = "text-blue-400" href="..">Home</Link>
                <h1 className="text-3xl text-cyan-400">Grocery List</h1>
            
            </div>
            
            <FormSub></FormSub>
        </main>
    )
}