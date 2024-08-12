import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <form
        className="absolute my-44 mx-auto w-3/12 p-12 bg-opacity-80
      left-0 right-0 bg-black rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-3 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="my-4 p-3 w-full rounded-sm bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-3 w-full rounded-sm bg-gray-600"
        />
        <button className="bg-red-700  p-3 my-6 w-full rounded-lg">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? let's Sign up!!"
            : "Already registered? Sign In now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
