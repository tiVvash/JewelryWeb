import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Products from './pages/Products'
import ScrollTop from './components/ScrollTop';
import ItemDescription from './pages/ItemDescription';

function App() {


  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />  
        <Route path="/products/:id" element={<ItemDescription/>}/>
      </Routes>
    </Router>
  )
}

export default App
