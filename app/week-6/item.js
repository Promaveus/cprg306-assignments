export default function Item(props){

    return(
        <main>
            <li>Name: {props.name}</li>
            <li>Quantity: {props.quantity}</li>
            <li>category: {props.category}</li>
        </main>
    ) 
}