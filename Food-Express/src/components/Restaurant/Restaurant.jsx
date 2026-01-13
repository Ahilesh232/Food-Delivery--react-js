import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, MapPin, Search } from 'lucide-react';
import './Restaurant.css'


// Mock API for getting all restaurants
const getAllRestaurants = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Burger Palace",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.8,
      location: "Downtown",
      deliveryTime: 25,
      categories: ["American", "Burgers", "Fast Food"],
      priceRange: "$$"
    },
    {
      id: 2,
      name: "Pizza Paradise",
      imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      rating: 4.6,
      location: "Midtown",
      deliveryTime: 30,
      categories: ["Italian", "Pizza", "Pasta"],
      priceRange: "$$"
    },
    {
      id: 3,
      name: "Sushi Spot",
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
      rating: 4.9,
      location: "Westside",
      deliveryTime: 35,
      categories: ["Japanese", "Sushi", "Asian"],
      priceRange: "$$$"
    },
    {
      id: 4,
      name: "Taco Tienda",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      rating: 4.5,
      location: "Downtown",
      deliveryTime: 20,
      categories: ["Mexican", "Tacos", "Burritos"],
      priceRange: "$"
    },
    {
      id: 5,
      name: "Thai Delight",
      imageUrl: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4",
      rating: 4.7,
      location: "Eastside",
      deliveryTime: 40,
      categories: ["Thai", "Asian", "Spicy"],
      priceRange: "$$"
    },
    {
      id: 6,
      name: "Indian Spice",
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
      rating: 4.4,
      location: "Midtown",
      deliveryTime: 45,
      categories: ["Indian", "Curry", "Vegetarian"],
      priceRange: "$$"
    },
    {
      id: 7,
      name: "Pasta Palace",
      imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df",
      rating: 4.3,
      location: "Northside",
      deliveryTime: 35,
      categories: ["Italian", "Pasta", "Wine"],
      priceRange: "$$$"
    },
    {
      id: 8,
      name: "Chicken Heaven",
      imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
      rating: 4.6,
      location: "Southside",
      deliveryTime: 30,
      categories: ["Chicken", "American", "Fast Food"],
      priceRange: "$$"
    }
  ]);
};

const ViewAllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Load all restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurants();
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...restaurants];

    // Apply category filter
    if (categoryFilter !== 'All') {
      result = result.filter(restaurant => 
        restaurant.categories.some(category => 
          category.toLowerCase() === categoryFilter.toLowerCase()
        )
      );
    }

    // Apply price filter
    if (priceFilter !== 'All') {
      result = result.filter(restaurant => restaurant.priceRange === priceFilter);
    }

    // Apply search query
    if (searchQuery) {
      result = result.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.categories.some(category => 
          category.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return a.deliveryTime - b.deliveryTime;
        case 'priceAsc':
          return a.priceRange.length - b.priceRange.length;
        case 'priceDesc':
          return b.priceRange.length - a.priceRange.length;
        default:
          return 0;
      }
    });

    setFilteredRestaurants(result);
  }, [restaurants, categoryFilter, priceFilter, sortBy, searchQuery]);

  // Handle restaurant card click
  const handleRestaurantClick = (restaurantId) => {
    // Add click animation
    const restaurantCard = document.querySelector(`.restaurant-card[data-id="${restaurantId}"]`);
    if (restaurantCard) {
      restaurantCard.classList.add('pulse');
      
      setTimeout(() => {
        navigate(`/order/${restaurantId}`);
      }, 500);
    } else {
      navigate(`/order/${restaurantId}`);
    }
  };

  // Get all unique categories from restaurants
  const allCategories = ['All', ...new Set(
    restaurants.flatMap(restaurant => restaurant.categories)
  )];

  return (
    <div className="all-restaurants-page">
      <div className="all-restaurants-header fade-in">
        <h1>All Restaurants</h1>
        <p>Discover the best places to eat in your area</p>
      </div>

      <div className="filters-container slide-in">
        <div className="filter-group">
          <span className="filter-label">Category:</span>
          <select 
            className="filter-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {allCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          
          <span className="filter-label">Price:</span>
          <select 
            className="filter-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="All">All Prices</option>
            <option value="$">$ (Budget)</option>
            <option value="$$">$$ (Moderate)</option>
            <option value="$$$">$$$ (Expensive)</option>
          </select>
          
          <span className="filter-label">Sort By:</span>
          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Highest Rated</option>
            <option value="deliveryTime">Fastest Delivery</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
          </select>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search restaurants or cuisines" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">
            <Search size={18} />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading restaurants...</p>
        </div>
      ) : filteredRestaurants.length === 0 ? (
        <div className="no-results bounce-in">
          <h3>No restaurants found</h3>
          <p>Try adjusting your filters or search query</p>
          <button 
            className="reset-filters-btn"
            onClick={() => {
              setCategoryFilter('All');
              setPriceFilter('All');
              setSortBy('rating');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="restaurants-grid">
          {filteredRestaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id}
              data-id={restaurant.id}
              className="restaurant-card fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <div className="restaurant-image-container">
                <img 
                  src={restaurant.imageUrl} 
                  alt={restaurant.name} 
                  className="restaurant-image"
                />
                <div className="restaurant-price-badge">{restaurant.priceRange}</div>
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
                <button className="order-btn hover-scale">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllRestaurants;