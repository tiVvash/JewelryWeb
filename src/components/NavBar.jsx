import Logo from '../assets/Logo.png'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="NavBarContainer">
            <div className="NavBar container">
                <div className="Logo">
                    <img src={Logo} className='LogoImg' alt="" />
                </div>
                <ul className='menu'>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <li>About Us</li>
                    <Link to={'/products'}>
                    <li>Jewelry</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}