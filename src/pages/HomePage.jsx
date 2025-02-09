import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import ProductsHome from "../components/ProductsHome";


export default function HomePage() {
    return (
        <>
            <Hero />
            <PopularProducts />
            <ProductsHome/>
            <Footer/>
        </>
    )
}