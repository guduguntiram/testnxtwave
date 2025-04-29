import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Ensure this is correctly linked

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div className="signup-page"> {/* Apply the outer class here */}
      <div className="signup-card"> {/* Apply the card class here */}
        <h2>Sign Up</h2>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
