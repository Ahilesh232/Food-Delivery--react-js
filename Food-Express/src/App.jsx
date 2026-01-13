import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import Restaurants from './components/Restaurant/Restaurant';
 // Global styles for your app

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              
              <Route path="/restaurants" element={<Restaurants />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;