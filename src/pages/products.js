import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Filter from '../components/Filter/Filter';

const Products = () => {
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
        <>
            <Navbar />
            <main>
                <div className='products'>
                    <Filter />
                    <div className='boxes container'>
                        {data.map((prod) => {
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
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Products;