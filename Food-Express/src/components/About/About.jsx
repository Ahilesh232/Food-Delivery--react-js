import React from "react";
import "./About.css";
import { Award, Target, Users, Clock, Globe, Truck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section with Food Background */}
      <div className="about-hero" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')"
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Food Express</h1>
          <p>Connecting great food with hungry customers </p>
        </div>
      </div>

      {/* Main About Section */}
      <section className="about-section">
        <div className="about-content">
          <img
            src="./src/assets/images/Restaurant.jpeg"
            alt="Chef preparing food"
            className="about-image"
            loading="lazy"
          />
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Welcome to Food Express! We are dedicated to bringing you the best
              food from your favorite restaurants, delivered quickly to your door.
              Whether you're craving a pizza, sushi, or a delicious burger, we've
              got it all. Our easy-to-use app allows you to browse a variety of
              options, order your meal, and track your delivery in real-time.
            </p>
            <p>
              Founded in 2019, Food Express started with a simple mission: to make
              food delivery easier, faster, and more enjoyable. With a team of
              dedicated drivers and 24/7 customer support, we strive to provide an
              exceptional dining experience. Order today and get your food delivered
              in minutes!
            </p>
          </div>
        </div>
      </section>

      {/* Company Goals Section */}
      <section className="goals-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')"
      }}>
        <div className="section-header">
          <h2>Our Goals</h2>
          <p>What drives us every day</p>
        </div>

        <div className="goals-container">
          <div className="goal-card">
            <div className="goal-icon">
              <Clock size={40} />
            </div>
            <h3>Fast Delivery</h3>
            <p>We aim to deliver your food in under 30 minutes, keeping it hot and fresh.</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <Globe size={40} />
            </div>
            <h3>Sustainability</h3>
            <p>We're committed to reducing our carbon footprint with eco-friendly packaging and practices.</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <Users size={40} />
            </div>
            <h3>Community Support</h3>
            <p>We partner with local restaurants to help them grow and reach more customers.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="section-header">
          <h2>Our Achievements</h2>
          <p>Milestones we're proud of</p>
        </div>

        <div className="achievements-timeline">
          <div className="achievement-item">
            <div className="achievement-year">2019</div>
            <div className="achievement-content">
              <h3>Company Launch</h3>
              <p>Started operations in 5 cities with 50+ restaurant partners</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2020</div>
            <div className="achievement-content">
              <h3>Rapid Growth</h3>
              <p>Expanded to 15 cities and delivered over 1 million orders</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2021</div>
            <div className="achievement-content">
              <h3>"Best Food Delivery App"</h3>
              <p>Awarded by City Food Magazine for customer satisfaction</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2022</div>
            <div className="achievement-content">
              <h3>Sustainability Initiative</h3>
              <p>Launched eco-friendly packaging across all partner restaurants</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2023</div>
            <div className="achievement-content">
              <h3>5 Million Deliveries</h3>
              <p>Reached milestone of 5 million successful deliveries</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-year">2024</div>
            <div className="achievement-content">
              <h3>National Expansion</h3>
              <p>Now operating in 50 cities nationwide with 2,000+ restaurant partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')"
      }}>
        <div className="stat-card">
          <div className="stat-icon">
            <Truck size={40} />
          </div>
          <div className="stat-number">5M+</div>
          <div className="stat-text">Deliveries</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={40} />
          </div>
          <div className="stat-number">2M+</div>
          <div className="stat-text">Happy Customers</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Award size={40} />
          </div>
          <div className="stat-number">2K+</div>
          <div className="stat-text">Restaurant Partners</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Globe size={40} />
          </div>
          <div className="stat-number">50+</div>
          <div className="stat-text">Cities Served</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Meet Our Leadership</h2>
          <p>The faces behind Food Express</p>
        </div>

        <div className="team-container">
          <div className="team-member">
            <img 
              src="./src/assets/images/Sayeefsha_.jpg" 
              alt="sayeefsha" 
              className="team-image" 
              loading="lazy"
            />
            <h3>SayeefSha</h3>
            <p className="team-role">CEO & Founder</p>
            <p>SayeefShaa vision for faster, more efficient food delivery has driven our growth since day one.</p>
          </div>
          <div className="team-member">
            <img 
              src="./src/assets/images/Vijay.jpg" 
              alt="Vijay" 
              className="team-image" 
              loading="lazy"
            />
            <h3>Vijay</h3>
            <p className="team-role">CTO</p>
            <p>Vijay leads our technology team, creating intuitive platforms for customers and restaurants.</p>
          </div>
          <div className="team-member">
            <img 
              src="./src/assets/images/Ajith.jpg" 
              alt="Ajith" 
              className="team-image" 
              loading="lazy"
            />
            <h3>Ajith</h3>
            <p className="team-role">COO</p>
            <p>Ajith ensures our operations run smoothly across all cities we serve.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')"
      }}>
        <div className="cta-content">
          <h2>Ready to order?</h2>
          <p>Download our app and get your first delivery fee waived!</p>
          <div className="cta-buttons">
            <a href="#" className="cta-button">Download App</a>
            <a href="#" className="cta-button secondary">Order Online</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;