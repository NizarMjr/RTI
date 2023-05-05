import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import { useState, useEffect } from 'react'
const Feature = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetching = async () => {
            let res = await fetch('../../data.json');
            res = await res.json();
            setData(res);
        }
        fetching();
    }, []);
    return (
        <main className="feature section">
            <h2 className="main-title">Produits Populaires</h2>
            <div className='container feature-content'>
                <div className='boxes'>
                    {data.map((prod) => {
                        if (prod.id % 2 === 1)
                            return (
                                <Link href={`/products/${prod.id}`}>
                                    <div className='box' key={prod.id}>
                                        <img src={`../../${prod.image}`} alt={prod.name} className='' />
                                        <div className='item-info'>
                                            <h2 className='item-name'>{prod.name}</h2>
                                            <span className='item-price'>{prod.price} Dt</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                    })}
                </div>
                <Link href='/products'>
                    <button className='btn'>Je D'écouvre</button>
                </Link>
            </div>

        </main>
    )
}
export default Feature;