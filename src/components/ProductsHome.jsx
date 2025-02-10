import './ProductsHome.css'
import { useState } from "react";
import Img8 from '../assets/Img8.jpg'
import Img9 from '../assets/Img9.jpg'
import Img3 from '../assets/Img3.jpg'
import Img7 from '../assets/Img7.jpg'
import Img6 from '../assets/Img6.jpg'
import ArrowRight from '../assets/icon/navigation/ArrowRight.png'
import { Link } from 'react-router-dom'; 

export default function ProductsHome() {

    const images = {
        All: Img8,
        Rings: Img3,
        Earrings: Img9,
        Necklaces: Img7,
        Bracelets: Img6,
    };
    const [currentImage, setCurrentImage] = useState(images.All);
    return (
        <div className="ProductHome">
            <div className="container ProductName">
                <div className="NameButton">

                    {Object.entries(images).map(([key, img]) => (
                        <Link
                            key={key}
                            to={`/products?category=${key.toLowerCase()}`} 
                            style={{ textDecoration: 'none' }}
                        >
                            <button
                                onMouseEnter={() => setCurrentImage(img)} 
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)} 
                                <img src={ArrowRight} alt="" />
                            </button>
                        </Link>
                    ))}
                </div>

                <div className="ProductImage">
                    <img src={currentImage} alt="Category" />
                </div>
            </div>
        </div>
    );
};