export default function Item(props){

    return(
        <div>
            <li>Name: {props.name}</li>
            <li>Quantity: {props.quantity}</li>
            <li>category: {props.category}</li>
        </div>
    ) 
}