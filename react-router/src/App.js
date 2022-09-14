import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>Seção 8 - React Router</h1>
      <BrowserRouter>
       <Navbar />
       <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} /> {/* Rota Dinâmica */}
          <Route path='/products/:id/info' element={<Info />} /> {/* Nested Routes */}
          <Route path='/search' element={<Search />} /> {/* Rota de busca */}
          <Route path='/company' element={<Navigate to='/about' />} /> {/* Redirect */}
          <Route path='*' element={<NotFound />} /> {/* Not match route ou rota não encontrada */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
