import NewItem from "./new-item";

export default function FourPage(){

    return(

        <main className="h-screen flex items-center justify-center">
            <div className="bg-cyan-400 w-1/3 flex flex-col items-center justify-center">
            <h1 className="text-2xl m-4">Item Quantity</h1>
            <NewItem></NewItem>
            </div>
        </main>
    )
}