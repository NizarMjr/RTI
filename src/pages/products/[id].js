import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar"
import Counter from "../../components/Counter/Counter";

const Detail = (props) => {
    const prod = {
        "id": "5",
        "name": "Abri Animaux LUKA",
        "categorie": "Accessoires",
        "material": "Métal",
        "price": "549",
        "promo": "-15%",
        "delivery": "8",
        "color": "Noire",
        "image": "/assets/pic-5.jpeg",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?",
    }
    return (
        <main>
            <Navbar />
            <div className="container">
                <button className="btn my-[2rem] text-[.8rem]">RETOUR AUX PRODUITS</button>
                <div className="detail">
                    <img src={`../${prod.image}`} alt={prod.name} />
                    <div className="detail-content">
                        <h2 className="name">{prod.name}</h2>
                        <span className="price">{prod.price} dt</span>
                        <p className="description">{prod.description}</p>
                        <p className="delivery">Livraison: {prod.delivery} jours</p>
                        <p className="material">Matériel: {prod.material}</p>
                        <Counter />
                        <button className="btn w-[fit-content] mt-[1rem]">Ajouter au panier</button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
export default Detail;

