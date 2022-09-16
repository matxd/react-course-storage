import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Seção 9 - Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
