import './ProductSearch.css'
import { useLocation } from 'react-router-dom';
import Img8 from '../assets/Img8.jpg'
import Img9 from '../assets/Img9.jpg'
import Img3 from '../assets/Img3.jpg'
import Img7 from '../assets/Img7.jpg'
import Img6 from '../assets/Img6.jpg'

const ProductSearch = () => {
    const location = useLocation();

      const category = new URLSearchParams(location.search).get('category') || 'all';

      const products = [
        { id: 1, name: 'Ring 1', category: 'rings' , img: Img8},
        { id: 2, name: 'Earring 1', category: 'earrings', img: Img9},
        { id: 3, name: 'Necklace 1', category: 'necklaces', img:Img3 },
        { id: 4, name: 'Bracelet 1', category: 'bracelets', img:Img7 },
        { id: 5, name: 'Ring 2', category: 'rings' ,img:Img6},
        { id: 6, name: 'Earring 2', category: 'earrings' },
      ];

      const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

    return (
        <div>
          <h2>Products - {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="productList">
            {filteredProducts.map(product => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={(product.img)} alt="" />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default ProductSearch;