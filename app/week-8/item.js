export default function Item({ item, onSelect }) {
    return (

        <div 
            className="bg-cyan-400 m-4 w-3/4 rounded-lg p-4 cursor-pointer text-white"
            onClick={() => onSelect(item)}  // Trigger onSelect with item details
        >
            <ul>
                <li><strong>Name:</strong> {item.name}</li>
                <li><strong>Quantity:</strong> {item.quantity}</li>
                <li><strong>Category:</strong> {item.category}</li>
            </ul>
        </div>
    );
}
