import './JewelryDescription.css'
import { products } from './Items'
import { Link } from 'react-router-dom';

export default function JewelryDescription({ productId }) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className="JewelryDescription">
            <div className="container">
                <div className="descriptionContainer">
                    <div className="description">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <Link to={'/products'}>
                            <button>Go back</button>
                        </Link>
                    </div>
                    <img src={product.img} alt="" />
                </div>

            </div>
        </div>
    )
}