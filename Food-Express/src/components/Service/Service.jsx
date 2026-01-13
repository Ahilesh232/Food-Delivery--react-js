import React, { useEffect } from 'react';
import './Service.css';
import { Clock, MapPin, Phone, ShoppingCart, Utensils, Truck, Home, Store, CreditCard, Star } from 'lucide-react';

const ServicesPage = () => {
  // Add intersection observer to handle scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in">
          <h1>Our Services</h1>
          <p>Explore the services we provide to make your food delivery experience seamless and efficient.</p>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features">
        <div className="section-header animate-slide-up">
          <h2>Our Key Features</h2>
          <p>We provide a range of services to enhance your dining experience.</p>
        </div>

        <div className="features-container">
          <div className="feature-card animate-slide-up delay-100">
            <div className="feature-icon">
              <Truck size={40} />
            </div>
            <h3>Fast Delivery</h3>
            <p>Enjoy food delivered to your doorstep in under 30 minutes!</p>
          </div>
          <div className="feature-card animate-slide-up delay-200">
            <div className="feature-icon">
              <MapPin size={40} />
            </div>
            <h3>Real-time Tracking</h3>
            <p>Track your order in real-time from the restaurant to your door.</p>
          </div>
          <div className="feature-card animate-slide-up delay-300">
            <div className="feature-icon">
              <Phone size={40} />
            </div>
            <h3>24/7 Support</h3>
            <p>Our customer support is available around the clock to assist you with any queries.</p>
          </div>
          <div className="feature-card animate-slide-up delay-400">
            <div className="feature-icon">
              <Home size={40} />
            </div>
            <h3>Home Delivery</h3>
            <p>Get your food delivered right to your doorstep anytime.</p>
          </div>
          <div className="feature-card animate-slide-up delay-500">
            <div className="feature-icon">
              <Store size={40} />
            </div>
            <h3>On-Spot Pickup</h3>
            <p>Prefer to collect? Pick up your order directly from the restaurant.</p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-methods">
        <div className="section-header animate-slide-up">
          <h2>Payment Methods</h2>
          <p>Flexible payment options to suit your needs.</p>
        </div>

        <div className="features-container">
          <div className="feature-card animate-slide-up delay-100">
            <div className="feature-icon">
              <CreditCard size={40} />
            </div>
            <h3>Online Payments</h3>
            <p>Pay securely using credit/debit cards, UPI, and wallets.</p>
          </div>
          <div className="feature-card animate-slide-up delay-200">
            <div className="feature-icon">
              <Truck size={40} />
            </div>
            <h3>Cash on Delivery</h3>
            <p>Prefer cash? Pay upon receiving your order.</p>
          </div>
        </div>
      </section>

      {/* Service Reviews */}
      <section className="service-reviews">
        <div className="section-header animate-slide-up">
          <h2>Customer Reviews</h2>
          <p>What our customers say about us.</p>
        </div>

        <div className="reviews-container">
          <div className="review-card animate-slide-up delay-100">
            <div className="review-icon">
              <Star size={40} />
            </div>
            <h3>Great Service!</h3>
            <p>"Fast delivery and delicious food. Highly recommended!"</p>
          </div>
          <div className="review-card animate-slide-up delay-200">
            <div className="review-icon">
              <Star size={40} />
            </div>
            <h3>Super Convenient!</h3>
            <p>"Loved the real-time tracking. Will order again!"</p>
          </div>
          <div className="review-card animate-slide-up delay-300">
            <div className="review-icon">
              <Star size={40} />
            </div>
            <h3>Awesome Support!</h3>
            <p>"Customer support was so helpful and responsive."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;