import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { useCart } from "../CartContext/CartContext";  // Adjust based on location

import './Home.css';

// Mock API for demonstration - replace with actual API calls
const getFeaturedRestaurants = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Burger Palace",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.8,
      location: "Downtown",
      deliveryTime: 25,
      categories: ["American", "Burgers", "Fast Food"]
    },
    {
      id: 2,
      name: "Pizza Paradise",
      imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      rating: 4.6,
      location: "Midtown",
      deliveryTime: 30,
      categories: ["Italian", "Pizza", "Pasta"]
    },
    {
      id: 3,
      name: "Sushi Spot",
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
      rating: 4.9,
      location: "Westside",
      deliveryTime: 35,
      categories: ["Japanese", "Sushi", "Asian"]
    },
  ]);
};

const getPopularDishes = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Classic Cheeseburger",
      restaurant: "Burger Palace",
      price: 12.99,
      imageUrl: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      price: 14.99,
      imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },
    {
      id: 3,
      name: "Dragon Roll",
      restaurant: "Sushi Spot",
      price: 16.99,
      imageUrl: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db"
    },
    {
      id: 4,
      name: "Street Tacos",
      restaurant: "Taco Tienda",
      price: 10.99,
      imageUrl: "./src/assets/images/Street Tacos.jpg"
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      restaurant: "Pizza Paradise",
      price: 13.99,
      imageUrl: "./src/assets/images/Spaghetti Bolognese.jpg"
    },
    {
      id: 6,
      name: "California Roll",
      restaurant: "Sushi Spot",
      price: 15.49,
      imageUrl: "./src/assets/images/California Roll.jpg"
    },
    {
      id: 7,
      name: "Double Bacon Burger",
      restaurant: "Burger Palace",
      price: 15.99,
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b"
    },
    {
      id: 8,
      name: "Chicken Quesadilla",
      restaurant: "Taco Tienda",
      price: 11.99,
      imageUrl: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f"
    },
    {
      id: 9,
      name: "Pepperoni Pizza",
      restaurant: "Pizza Paradise",
      price: 16.99,
      imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e"
    },
    {
      id: 10,
      name: "Spicy Tuna Roll",
      restaurant: "Sushi Spot",
      price: 14.99,
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
    }
  ]);
};

// Add CSS animations
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes addToCartAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); background-color: var(--primary-color); }
  100% { transform: scale(1); }
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.slide-in {
  animation: slideIn 0.8s ease forwards;
}

.pulse {
  animation: pulse 2s infinite;
}

.float {
  animation: float 3s ease infinite;
}

.add-to-cart-animation {
  animation: addToCartAnimation 0.5s ease;
}

/* Animation delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
`;

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleElements, setVisibleElements] = useState({});
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    // Create a style element and append the animations
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    // Intersection Observer setup for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (!section.id) section.id = `section-${index}`;
      observer.observe(section);
    });

    const fetchData = async () => {
      try {
        const [restaurantsData, dishesData] = await Promise.all([
          getFeaturedRestaurants(),
          getPopularDishes()
        ]);
        setRestaurants(restaurantsData);
        setPopularDishes(dishesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      sections.forEach(section => observer.unobserve(section));
      document.head.removeChild(styleElement);
    };
  }, []);

  // Handle adding dish to cart with animation
  const handleAddToCart = (dish) => {
    addToCart(dish);
    
    // Set animation state for this item
    setAddedItems(prev => ({ ...prev, [dish.id]: true }));
    
    // Reset animation after it completes
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [dish.id]: false }));
    }, 500);
  };

  return (
    <div>
      {/* Hero Section with Food Background */}
      <section id="hero-section" className="hero-section">
        <div className="hero-background">
          <div className="food-background-overlay"></div>
        </div>
        <div className={`hero-content ${visibleElements['hero-section'] ? 'fade-in' : ''}`}>
          <h1>Delicious Food, Delivered Fast</h1>
          <p>Order from your favorite restaurants and have it delivered right to your door.</p>
          <div className="search-container">
            <input type="text" placeholder="Enter your address" />
            <button className="find-food-btn pulse">Find Food</button>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="wave-separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Featured Restaurants */}
      <section id="featured-restaurants" className="featured-restaurants">
        <div className={`section-header ${visibleElements['featured-restaurants'] ? 'fade-in' : ''}`}>
          <h2>Featured Restaurants</h2>
          <p>Discover the best places to eat in your neighborhood</p>
        </div>
        
        {isLoading ? (
          <div className="loading-container">
            <p>Loading restaurants...</p>
          </div>
        ) : (
          <div className="restaurants-grid">
            {restaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id} 
                className={`restaurant-card ${visibleElements['featured-restaurants'] ? 'fade-in' : ''}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="restaurant-image-container">
                  <img 
                    src={restaurant.imageUrl} 
                    alt={restaurant.name} 
                    className="restaurant-image"
                  />
                  <div className="restaurant-badge">Popular</div>
                </div>
                <div className="restaurant-details">
                  <div className="restaurant-header">
                    <h3>{restaurant.name}</h3>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      {restaurant.rating}
                    </div>
                  </div>
                  <div className="restaurant-location">
                    <MapPin size={16} />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="delivery-time">
                    <Clock size={16} />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="categories">
                    {restaurant.categories.map((category, idx) => (
                      <span key={idx} className="category-tag">
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link to={`/order/${restaurant.id}`} className="order-btn hover-scale">
                  Order Now
                   </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className={`view-all-container ${visibleElements['featured-restaurants'] ? 'fade-in' : ''}`}>
          <Link to="/restaurants" className="view-all-btn">
            View All Restaurants
          </Link>
        </div>
      </section>
      
      {/* Popular Dishes with Food Background Pattern */}
      <section id="popular-dishes" className="popular-dishes">
        <div className="food-pattern-background"></div>
        <div className={`section-header ${visibleElements['popular-dishes'] ? 'fade-in' : ''}`}>
          <h2>Popular Dishes</h2>
          <p>The most ordered dishes from our top restaurants</p>
        </div>
        
        {isLoading ? (
          <div className="loading-container">
            <p>Loading dishes...</p>
          </div>
        ) : (
          <div className="dishes-grid">
            {popularDishes.slice(0, 8).map((dish, index) => (
              <div 
                key={dish.id} 
                className={`dish-card ${visibleElements['popular-dishes'] ? 'fade-in' : ''}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="dish-image-container">
                  <img 
                    src={dish.imageUrl} 
                    alt={dish.name} 
                    className="dish-image"
                  />
                  <div className="dish-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="dish-details">
                  <h3>{dish.name}</h3>
                  <p className="restaurant-name">{dish.restaurant}</p>
                  <div className="dish-footer">
                    <span className="dish-price">${dish.price.toFixed(2)}</span>
                    <button 
                      className={`add-to-cart-btn hover-scale ${addedItems[dish.id] ? 'add-to-cart-animation' : ''}`}
                      onClick={() => handleAddToCart(dish)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className={`view-all-container ${visibleElements['popular-dishes'] ? 'fade-in' : ''}`}>
          <Link to="/dishes" className="view-all-btn">
            View All Popular Dishes
          </Link>
        </div>
      </section>
      
      {/* Rest of your HomePage component remains the same */}
      {/* How it Works */}
      <section id="how-it-works" className="how-it-works">
        {/* Content remains the same */}
        <div className={`section-header ${visibleElements['how-it-works'] ? 'fade-in' : ''}`}>
          <h2>How It Works</h2>
          <p>Easy steps to get your favorite meal</p>
        </div>
        
        <div className="steps-container">
          <div className={`step ${visibleElements['how-it-works'] ? 'fade-in delay-100' : ''}`}>
            <div className="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>Choose Location</h3>
            <p>Enter your address to find restaurants that deliver to you</p>
          </div>
          
          <div className={`step ${visibleElements['how-it-works'] ? 'fade-in delay-200' : ''}`}>
            <div className="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3>Choose Food</h3>
            <p>Browse menus and select your favorite dishes</p>
          </div>
          
          <div className={`step ${visibleElements['how-it-works'] ? 'fade-in delay-300' : ''}`}>
            <div className="step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3>Enjoy Your Meal</h3>
            <p>Your order will be delivered to your doorstep, hot and fresh</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials and other sections remain the same */}
    </div>
  );
};

export default HomePage;