import Hero from "./Hero";
import NavBar from "./NavBar";
import './NavHero.css'

export default function NavHero() {
    return (

        <div className="NavHeroContainer">
            <NavBar />
            <Hero />
        </div>

    )
}