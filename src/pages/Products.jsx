import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductSearch from "../components/ProductSearch";
import './Products.css'

export default function AllJewelry() {
    return (
        <div className="productsContainer">
            <NavBar />
            <ProductSearch/>
            <Footer className='ProductFooter'/>
            </div>
    )
}