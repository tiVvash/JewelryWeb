import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Products from './pages/Products'
import ScrollTop from './components/ScrollTop';

function App() {


  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />  
      </Routes>
    </Router>
  )
}

export default App
