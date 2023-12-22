import React, { useState } from "react";
import SignInForm from "./UserAuth/SignIn"
import SignUpForm from "./UserAuth/SignUp";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <SignUpForm />
      <SignInForm />
      <div id="container">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with us please login with your personal info
        </p>
        <button
          className="ghost"
          id="signIn"
          onClick={() => handleOnClick("signIn")}
        >
          Sign In
        </button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button
          className="ghost "
          id="signUp"
          onClick={() => handleOnClick("signUp")}
        >
          Sign Up
        </button>
      </div>
      <Footer />
    </div>
  );
}
