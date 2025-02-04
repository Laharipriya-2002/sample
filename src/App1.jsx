import React, { useState, useEffect } from 'react';
import './app1.css'; // Import custom styling for app1.jsx

function App1() {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [userId, setUserId] = useState(''); // State to store the generated user ID
  const [error, setError] = useState(''); // State to store error message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => {
      setIsFormChanged(true); // Mark form as changed
      return { ...prevState, [name]: value };
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userData.phone)) {
      setError('Phone number must be exactly 10 digits and contain only numbers.');
      return;
    }

    // Validate email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Generate a unique user ID based on the current timestamp
    const generatedUserId = `user-${Date.now()}`;

    // Save the data to localStorage
    localStorage.setItem(generatedUserId, JSON.stringify(userData));

    console.log('User Data Submitted:', userData);

    // Update the userId state to display it
    setUserId(generatedUserId);

    setIsFormChanged(false); // Reset form change flag
    setError(''); // Clear error message if form is valid
  };

  // Detect unsaved changes on page close or reload
  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      if (isFormChanged) {
        const message = 'You have unsaved changes. Do you really want to leave?';
        e.returnValue = message; // For some browsers
        return message; // For others
      }
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [isFormChanged]);

  return (
    <div className="form-container">
      <h1>User Data Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>

      {/* Display error message if phone number or email is invalid */}
      {error && <div className="error-message">{error}</div>}

      {/* Display the generated user ID after form submission */}
      {userId && (
        <div className="user-id">
          <h2>Generated User ID: {userId}</h2>
        </div>
      )}
    </div>
  );
}

export default App1;
