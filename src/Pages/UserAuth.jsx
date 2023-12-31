import React, { useState } from "react";
import SignInForm from "./UserAuth/SignIn"
import SignUpForm from "./UserAuth/SignUp";
import useAuthentication from "../Components/Hook/useAuthenticate";

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const { authenticated, loading, userObj } = useAuthentication({successNavigateTo:'/profile'})
  return (
    <div className="App">
      {!loading && !isLogin && <SignUpForm setIsLogin={setIsLogin}/>}
      {!loading && isLogin && <SignInForm setIsLogin={setIsLogin}/>}
    </div>
  );
}
