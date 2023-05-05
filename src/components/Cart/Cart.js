import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector(state => state.items);
    return (
        <main className="cart none">
            <h2>Mon Panier</h2>
            {items.length === 0 ? <p className="empty-cart">Le est vide</p> :
                <div></div>}

        </main>
    )
}
export default Cart;