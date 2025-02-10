import './Footer.css'
import Logo from'../assets/Logo.png'

export default function Footer(){
    return(
        <footer>
            <div className="container">
            <div className="twoColumn">
                <div className="colLeft">
                    <img src={Logo} className='LogoImg' alt="" />
                    <p>Whether you're celebrating a special event or adding a touch of luxury to your everyday look, our jewelry is designed to elevate your style and make every occasion unforgettable</p>
                </div>
                <div className="colRight">
                    <div className="ProductsList">
                        <h3>Products</h3>
                        <p>All Products</p>
                        <p>Rings</p>
                        <p>Earrings</p>
                        <p>Necklaces</p>
                        <p>Bracelets</p>
                    </div>
                    <div className="Contact">
                        <h3>Contact Us</h3>
                        <p>info@Jevelry.com</p>
                        <p>1-800-200-300</p>
                        <p>3500 deer creek Rd Palo Alto, CA</p>
                    </div>

                </div>
            </div>
            </div>
        </footer>
    )
}