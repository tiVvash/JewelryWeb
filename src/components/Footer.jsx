import './Footer.css'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="twoColumn">
                    <div className="colLeft">
                        <img src={Logo} className='LogoImg' alt="" />
                        <p>Whether you're celebrating a special event or adding a touch of luxury to your everyday look, our jewelry is designed to elevate your style and make every occasion unforgettable</p>
                    </div>
                    <div className="colRight">
                        <ul className="ProductsList">
                            <h3>Products</h3>
                            <Link to="/products?category=all">
                                <li>All Products</li>
                            </Link>
                            <Link to="/products?category=rings">
                                <li>Rings</li>
                            </Link>
                            <Link to="/products?category=earrings">
                                <li>Earrings</li>
                            </Link>
                            <Link to="/products?category=necklaces">
                                <li>Necklaces</li>
                            </Link>
                            <Link to="/products?category=bracelets">
                                <li>Bracelets</li>
                            </Link>
                        </ul>
                        <ul className="Contact">
                            <h3>Contact Us</h3>
                            <li>info@Jevelry.com</li>
                            <li>1-800-200-300</li>
                            <li>3500 deer creek Rd Palo Alto, CA</li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}