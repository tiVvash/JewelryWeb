import Logo from '../assets/Logo.png'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="Logo">
                <img src={Logo} className='LogoImg' alt="" />
            </div>
            <ul className='menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Jewelry</li>
            </ul>
        </div>
    )
}