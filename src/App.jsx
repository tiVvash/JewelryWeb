import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AllJewelry from './pages/AllJewelry'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewelry" element={<AllJewelry />} />  
      </Routes>
    </Router>
  )
}

export default App
