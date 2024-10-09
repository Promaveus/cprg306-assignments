import ItemList from "./item-list";
import Link from "next/link";

export default function Page(){

    return(
        <h1 className="text-4xl font-bold text-cyan-500 place-items-center"> Shopping List
            <p>
                <Link className = "text-blue-400" href="..">Home</Link>
            </p>
            <main>
                <ItemList></ItemList>
            </main>
        </h1>
    )
}