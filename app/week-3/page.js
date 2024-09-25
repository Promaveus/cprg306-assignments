import ItemList from "./item-list";

export default function Page(){

    return(
        <h1 className="text-4xl font-bold text-cyan-500 place-items-center"> Shopping List
            <main>
                <ItemList></ItemList>
            </main>
        </h1>
    )
}