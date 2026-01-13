// src/api/foodApi.js

export const getFeaturedRestaurants = async () => {
    try {
      const response = await fetch("https://api.example.com/restaurants/featured");
      return await response.json();
    } catch (error) {
      console.error("Error fetching featured restaurants", error);
      return [];
    }
  };
  
  export const getPopularDishes = async () => {
    try {
      const response = await fetch("https://api.example.com/dishes/popular");
      return await response.json();
    } catch (error) {
      console.error("Error fetching popular dishes", error);
      return [];
    }
  };
  