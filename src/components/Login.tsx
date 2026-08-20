import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/6ef286cc-b89b-4da3-bab7-62971d87dbd0/web/IN-en-20260817-TRIFECTA-perspective_dce6e6bc-2bd3-45f2-9086-211bf8b6e8c8_large.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-black/70 p-8 shadow-2xl">
          <h1 className="mb-6 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault} className="space-y-4">
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none"
            />
            <button className="w-full rounded-md bg-red-600 px-4 py-3 font-semibold text-white cursor-pointer hover:bg-red-700">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <button
              type="button"
              onClick={toggleSignInForm}
              className="cursor-pointer"
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Existing User? Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
