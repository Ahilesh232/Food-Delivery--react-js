import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FoodExpress</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li>
          <Link to="/service" className="navbar-link">Services</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li className="cart-container">
          <Link 
            to="/cart" 
            className="cart-link"
            onMouseEnter={() => setIsCartHovered(true)}
            onMouseLeave={() => setIsCartHovered(false)}
          >
            <div className="cart-icon-wrapper">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`cart-icon ${isCartHovered ? 'cart-bounce' : ''}`}
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-badge">0</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;