import Cart from '../components/Cart/Cart'
import Feature from '../components/Feature/Feature'
import Landing from '../components/Landing/Landing'
import Footer from '../components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Furniture from '../components/Furniture/Furniture'
export default function Home() {
  return (
    <main >
      <Navbar />
      <Landing />
      <Cart />
      <Feature />
      <Furniture />
      <Footer />
    </main>
  )
}
