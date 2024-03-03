import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

import { auth } from "../firebase"; // Assuming you have a Firebase setup
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // Redirect to home page on successful sign-in
      }
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, [navigate]); // Dependency array to avoid infinite loops

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setErrorMessage(null); // Clear any previous errors
    } catch (error) {
      console.error("Sign in error:", error);
      setErrorMessage(error.message); // Set error message for display
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>

      {/* Sign Up Button */}
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
};

export default SignIn;
