import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Markets from './pages/Markets';
import Research from './pages/Research';
import Login from './pages/Login';
import ProductService from './pages/ProductService';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/research" element={<Research />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productservice" element={<ProductService />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
