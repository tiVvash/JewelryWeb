import NavBar from "./NavBar";
import './Hero.css'
import HeroImg from '../assets/HeroImg.png'

export default function Hero() {
    return (
        <div className="HeroContainer">
            <div className="container heroDisplay">
                <NavBar />
                <div className="Hero">
                    <div className="colLeft">
                        <h1>Timeless Pieces <br/> for Every Occasion</h1>
                        <p>Whether you're celebrating a special event or adding a touch of luxury to your everyday look, our jewelry is designed to elevate your style and make every occasion unforgettable</p>
                    </div>
                    <div className="ColRight">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}