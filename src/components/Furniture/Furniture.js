import { RiHistoryLine } from 'react-icons/ri'
import { FaTools } from 'react-icons/fa'
import { SiQuantconnect } from 'react-icons/si'
const Furniture = () => {
    return (
        <main className="furniture">
            <div className="container">
                <div className="title">
                    <h2>Custom Furniture
                        Built Only For You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
                <div className="boxes">
                    <div className="box homebox">
                        <h3>Mission</h3>
                        <i><SiQuantconnect /></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className="box homebox">
                        <h3>Vision</h3>
                        <i><FaTools /></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className="box homebox">
                        <h3>Histoire</h3>
                        <i><RiHistoryLine /></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Furniture;