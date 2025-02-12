import ProductDisplay from "./ProductDisplay";
import './ProductSearch.css'
import { Link } from 'react-router-dom';


export default function ProductSearch() {
    return (
        <div className="ProductSearch">
            <div className="container">
                <div className="categoryButtons">
                    <Link to="/products?category=all">
                        <button>All Products</button>
                    </Link>
                    <Link to="/products?category=rings">
                        <button>Rings</button>
                    </Link>
                    <Link to="/products?category=earrings">
                        <button>Earrings</button>
                    </Link>
                    <Link to="/products?category=necklaces">
                        <button>Necklaces</button>
                    </Link>
                    <Link to="/products?category=bracelets">
                        <button>Bracelets</button>
                    </Link>
                </div>
            </div>
            <ProductDisplay />
        </div>
    )
}