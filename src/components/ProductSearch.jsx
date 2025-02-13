import ProductDisplay from "./ProductDisplay";
import './ProductSearch.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductSearch() {
    const navigate = useNavigate();
const [selectedCategory, setSelectedCategory] = useState("all");

useEffect(() => {
    navigate(`/products?category=${selectedCategory}`);
}, [selectedCategory, navigate]);
    return (
        <div className="ProductSearch">
            <div className="container">
                <div className="categoryDropdown">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="dropDown"
                    >
                        <option value="all">All Products</option>
                        <option value="rings">Rings</option>
                        <option value="earrings">Earrings</option>
                        <option value="necklaces">Necklaces</option>
                        <option value="bracelets">Bracelets</option>
                    </select>
                </div>
            </div>
            <ProductDisplay />
        </div>
    )
}