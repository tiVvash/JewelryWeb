import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import ProductsHome from "../components/ProductsHome";
import NavBar from "../components/NavBar";


export default function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <PopularProducts />
            <ProductsHome/>
            <Footer/>
        </>
    )
}