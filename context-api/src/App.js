import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
