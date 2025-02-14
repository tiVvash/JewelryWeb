import Footer from "../components/Footer";
import JewelryDescription from "../components/JewelryDescription";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


export default function ItemDescription() {
    const { id } = useParams();
    const productId = Number(id);
    return (
        <>
            <NavBar />
            <JewelryDescription productId={productId} />
            <Footer />
        </>
    )
}