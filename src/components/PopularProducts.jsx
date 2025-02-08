import Carousel from './Carousel'
import './PopularProducts.css'



export default function PopularProducts() {
    return (
        <div className="container">
            <div className="PopularProducts">
                <h2>Popular Products</h2>
                <Carousel/>
            </div>
        </div>
    )
}