import './ProductDisplay.css'
import { useLocation, Link } from 'react-router-dom';
import ImgRing from '../assets/ImgRing.jpg'
import ImgEarring from '../assets/ImgEarring.jpg'
import Img3 from '../assets/Img3.jpg'
import Img7 from '../assets/Img7.jpg'
import Img6 from '../assets/Img6.jpg'
import ImgBracelet2 from '../assets/ImgBracelet2.jpg'
import ImgNecklace2 from '../assets/ImgNecklace2.jpg'
import ImgNecklace3 from '../assets/ImgNecklace3.jpg'


const ProductDisplay = () => {
  const location = useLocation();

  const category = new URLSearchParams(location.search).get('category') || 'all';

  const products = [
    { id: 1, name: 'Ring 1', category: 'rings', img: ImgRing },
    { id: 2, name: 'Earring 1', category: 'earrings', img: ImgEarring },
    { id: 4, name: 'Bracelet 1', category: 'bracelets', img: Img7 },
    { id: 5, name: 'bracelet 2', category: 'bracelets', img: Img6 },
    { id: 6, name: 'Necklace 1', category: 'necklaces', img: ImgNecklace2 },
    { id: 7, name: 'Bracelet 2', category: 'bracelets', img: ImgBracelet2 },
    { id: 8, name: 'Necklace 2', category: 'necklaces', img: ImgNecklace3 },
    { id: 9, name: 'Ring 2', category: 'rings', img: Img3 },
  ];

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  return (


    <div className='container'>
      <h2>Products - {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="productList">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}` }>
              <img src={(product.img)} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;