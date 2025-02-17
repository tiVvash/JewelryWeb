import Footer from "../components/Footer";
import ProductsHome from "../components/ProductsHome";
import NavHero from "../components/NavHero";
import Carousel from "../components/Carousel";


export default function HomePage() {
    return (
        <>
            <NavHero />
            <Carousel/>
            <ProductsHome />
            <Footer />
        </>
    )
}