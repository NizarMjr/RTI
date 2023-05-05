import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store';
import { Provider } from 'react-redux';
import '../components/Navbar/navbar.css'
import '../components/Cart/cart.css'
import '../components/HomeIntro/homeIntro.css'
import '../components/Feature/feature.css'
import '../components/Landing/landing.css'
import './products.css'
import '../components/Filter/filter.css'
import '../pages/detail.css'
import '../components/Counter/counter.css'
import '../components/Furniture/furniture.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>

  )
}
