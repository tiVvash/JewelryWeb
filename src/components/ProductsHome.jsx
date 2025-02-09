import './ProductsHome.css'
import { useState } from "react";
import Img8 from '../assets/Img8.jpg'
import Img9 from '../assets/Img9.jpg'
import Img3 from '../assets/Img3.jpg'
import Img7 from '../assets/Img7.jpg'
import Img6 from '../assets/Img6.jpg'
import ArrowRight from '../assets/icon/navigation/ArrowRight.png'

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
                        <button
                            key={key}
                            onMouseEnter={() => setCurrentImage(img)}
                            // onMouseLeave={() => setCurrentImage(images.All)}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                            <img src={ArrowRight}alt="" />
                        </button>
                    ))}
                </div>

                <div className="ProductImage">
                    <img src={currentImage} alt="Category" />
                </div>
            </div>
        </div>
    );
};