import { useState } from "react";

const Counter = () => {
    const [quantity, setQuntity] = useState(0);
    const addItem = () => {
        setQuntity(c => c + 1);
    }
    const removeItem = () => {
        if (quantity > 0) setQuntity(c => c - 1);
    }
    return (
        <div className="counter">
            <button className="minus" onClick={() => removeItem()}>-</button>
            <span>{quantity}</span>
            <button className="plus" onClick={() => addItem()}>+</button>
        </div>
    )
}
export default Counter;