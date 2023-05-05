import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
const Navbar = () => {
    const showBurgerNav = () => {
        document.getElementsByClassName('burger-list')[0].classList.remove('hide');
    }
    const hideBurgerNav = () => {
        document.getElementsByClassName('burger-list')[0].classList.add('hide');
    }
    const showCart = () => {
        if (document.getElementsByClassName('cart')[0].classList.contains('none'))
            document.getElementsByClassName('cart')[0].classList.remove('none');
        else document.getElementsByClassName('cart')[0].classList.add('none');
    }
    return (
        <>

            <nav className='navbar'>
                <div className='flex justify-between'>
                    <Link href='/'><div className='logo'>RTI <span>mobilia</span></div></Link>
                    <ul className='nav-list'>
                        <Link href='/'><li className=''>Acceuil</li></Link>
                        <li className=''>Propos</li>
                        <li className=''>Contactez Nous</li>
                    </ul>
                    <div className='burger-part'>
                        <i className='burger-icon' onClick={() => showBurgerNav()}>
                            <GiHamburgerMenu />
                        </i>
                    </div>
                </div>
                <div className='shop'>
                    <span className='quantity'>1</span>
                    <img src='../../../assets/icon-cart.svg' alt='' />
                </div>
            </nav>
            <div>
                <div className='burger-list hide'>
                    <ul>
                        <Link href='/'><li className=''>Acceuil</li></Link>
                        <li className=''>Propos</li>
                        <li className=''>Contactez Nous</li>
                    </ul>
                    <i className='close-burger' onClick={() => hideBurgerNav()}><AiOutlineClose /></i>
                    <Link href='/'><div className='logo text-center mt-[2rem]'>RTI <span>mobilia</span></div></Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;