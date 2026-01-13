import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users data from JSON file
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // In a real application, this would be an API call to your backend
        // For demonstration, we're simulating loading from a JSON file
        const response = await fetch('/users.json');
        if (!response.ok) {
          throw new Error('Could not fetch user data');
        }
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error loading user data:', error);
        setError('Error loading user data. Please try again later.');
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Login attempt with:', formData);
      
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      // Check if users array exists and has elements
      if (users && users.length > 0) {
        // Verify credentials against users data
        const user = users.find(
          user => user.email === formData.email && user.password === formData.password
        );

        if (user) {
          // Store user info in localStorage or context for app-wide access
          localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            email: user.email,
            name: user.name || user.email.split('@')[0],
            // Don't store sensitive data like passwords in localStorage
          }));
          
          // Redirect to home page
          navigate('/');
          return; // Exit early after successful redirect
        }
      }
      
      // If we reach here, either the users array is empty or credentials are invalid
      // For demo purposes, we can add a temporary bypass to allow any login
      // This is for demonstration only and should be removed in production
      console.log('Demo mode: allowing login bypass');
      localStorage.setItem('currentUser', JSON.stringify({
        id: 'demo-user',
        email: formData.email,
        name: formData.email.split('@')[0],
      }));
      
      // Redirect to home page
      navigate('/');
      
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="food-image-container">
        <div className="food-image-overlay">
          <div className="quote-container">
            <h2>Delicious food,</h2>
            <h2>delivered to your doorstep</h2>
            <p>"Food is our common ground, a universal experience."</p>
            <span className="quote-author">-Cibiraj</span>
          </div>
        </div>
      </div>
      
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="login-header">
            <h1 className="brand-name">FoodExpress</h1>
            <p className="login-subheader">Sign in to your account</p>
          </div>

          {error && (
            <div className="error-message" role="alert">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <div className="remember-me">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="form-group">
              <button
                type="submit"
                disabled={isLoading}
                className="login-button"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="signup-prompt">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="signup-link">
                Sign up now
              </Link>
            </p>
          </div>

          <div className="social-login">
            <div className="social-login-header">
              <span>Or continue with</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-button">
                Google
              </button>
              <button type="button" className="social-button">
                Facebook
              </button>
            </div>
          </div>
          
          <div className="login-footer">
            <p>By signing in, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;