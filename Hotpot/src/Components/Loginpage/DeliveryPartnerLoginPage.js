import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './loginpage.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Store/auth-slice';
import { siteAuthLogin } from '../Store/siteauthority-slice';

function DeliveryPartnerLogin() {
  const [isLoginFormDisplayed, setIsLoginFormDisplayed] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(null);
  const dispatch = useDispatch();
  const authLoggedIn = useSelector((state) => state.siteauth.authLoggedIn);

  useEffect(() => {
    if (location.state && location.state.from) {
      setPrevLocation(location.state.from);
    }
    else {
      setPrevLocation(null);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5249/api/DeliveryPartner/Register', {
        name: name,
        email: email,
        phone: phone,
        cityId: 2,
        userName: username,
        password: password,
        role: 'DeliveryPartner',
      });

      console.log('Registration successful:', response.data);
      // Clear form fields after successful registration
      setName('');
      setEmail('');
      setPhone('');
      setUsername('');
      setPassword('');
      alert("Registration successful! Please login and continue your foodie journey");
    } catch (error) {
      console.error('Registration failed:', error.message);
      setError('Registration failed. Please try again.');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5249/api/DeliveryPartner/Login', {
        userName: username,
        password: password,
        role: '',
        token: '',
        userId: 0
      });

      console.log('Login successful:', response.data);
      // Store token in session storage
      sessionStorage.setItem('DeliveryPartnerToken', response.data.token);
      sessionStorage.setItem('DeliveryPartnerUserId', response.data.userId);
      // Clear username and password fields
      setUsername('');
      setPassword('');
      dispatch(siteAuthLogin());
      //   dispatch(login());
      navigate(`/delivery-partner-profile`);
      // window.location.reload();
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Login failed. Please check your username and password.');
    }
  };

  const toggleForms = () => {
    setIsLoginFormDisplayed(!isLoginFormDisplayed);
  };

  return (
    <>
      {!authLoggedIn ? (
        <main>
          <br /><br /><br /><br />
          <section className="user-container">
            <div className="grid-two--column">
              <div className="form-text">
                {isLoginFormDisplayed ? (
                  <>
                    <h2>Delivery Partner Login</h2>
                    <p> View and manage your Deliveries <br /> Login with personal details</p>
                    <button className="registration-btn" onClick={toggleForms}>Register Here</button>
                    <p>Are you a Restaurant Owner?</p>
                    <Link className='registration-btn btn btn-primary' to='/restaurant-login'>Click Here</Link>
                    <p>Are you a Customer?</p>
                    <Link className='registration-btn btn btn-primary' to='/customer-login'>Click Here</Link>
                  </>
                ) : (
                  <>
                    <h2>Hello, Friend!</h2>
                    <p>Wanna start your career with us? <br /> Register and get started! </p>
                    <button className="login-btn" onClick={toggleForms}>Login Here</button>
                  </>
                )}
              </div>

              {isLoginFormDisplayed ? (
                <div className="login-form">
                  <h2>Sign In</h2>
                  <p>Access your account</p>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="input-field">
                      <label htmlFor="Username">Username: </label>
                      <input type="text" name="username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Password">Password: </label>
                      <input type="password" name="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </div>
                    <div className="input-field">
                      <input className='login-button' type="submit" value="Login" />
                    </div>
                  </form>
                  {error && <p className="error-message">{error}</p>}
                </div>
              ) : (
                <div className="registration-form">
                  <h2>Create Account</h2>
                  <p>Just a click away</p>
                  <form onSubmit={handleSubmit}>
                    <div className="input-field">
                      <label htmlFor="Name">Name:</label>
                      <input type="text" name="name" id="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Email">Email:</label>
                      <input type="email" name="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Phone">Phone:</label>
                      <input type="text" name="phone" id="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Username">Username:</label>
                      <input type="text" name="username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Password">Password:</label>
                      <input type="password" name="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </div>
                    <div className="input-field">
                      <input className='login-button' type="submit" value="Register" />
                    </div>
                  </form>
                  {error && <p className="error-message">{error}</p>}
                </div>
              )}
            </div>
          </section>
        </main>
      ) : (null)}

    </>
  );
}

export default DeliveryPartnerLogin;