export default function Item(props){

    return(
        <main className="bg-slate-300 px-2 py-6 rounded-md m-4 w-2/4 flex justify-center content-center">
            <li>Name: {props.name}</li>
            <li>Quantity: {props.quantity}</li>
            <li>category: {props.category}</li>
        </main>
    ) 
}