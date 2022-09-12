import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';


function App() {
  return (
    <div className="App">
      <h1>Seção 8 - React Router</h1>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
