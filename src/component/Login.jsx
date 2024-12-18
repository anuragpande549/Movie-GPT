import React from 'react';
import { useState, useRef } from 'react';
import { checkValidSignIn, checkValidSignUp } from '../utils/validate';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Combined imports from firebase/auth
import { useNavigate } from 'react-router-dom';
import app from '../utils/firebase';

function Login() {
  const [SignUp, setSignUp] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignUp = () => {
    setSignUp(!SignUp);
  };

  const handleButtonClick = () => {
    const auth = getAuth();

    if (!SignUp) {
      // signup
      const validResult = checkValidSignUp(email.current.value, password.current.value, name.current.value);
      setErrorMassage(validResult);

      if (!validResult) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;

            // Update profile with display name and photoURL
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: "https://lh3.google.com/u/0/ogw/AF2bZyjSf8kiZ4m9ltrmYsQXKCk50QolzaRWkPSdGfcM2GsKoA=s32-c-mo"
            }).then(() => {
              console.log("Profile updated successfully");
            }).catch((error) => {
              console.error("Error updating profile: ", error);
            });

            console.log(user, "user");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during sign-up: ", errorCode, errorMessage);
          });
      }
    } else {
      // login
      const validResult = checkValidSignIn(email.current.value, password.current.value);
      setErrorMassage(validResult);

      if (!validResult) {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in user: ", user);
            navigate("/Browser");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during login: ", errorCode, errorMessage);
          });
      }
    }
  };

  return (
    <div className={`flex items-center justify-center ${SignUp ? "sm:h-[32rem]" : "sm:h-[40rem]"} sm:bg-black/90 rounded-md h-full bg-black`}>
      <div className="w-full max-w-md p-8 space-y-6 text-white rounded-md">
        <h1 className="text-3xl font-semibold text-center">{SignUp ? "Sign In" : "Sign Up"}</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="font-semibold block mt-3">Email</label>
            <input
              type="text"
              id="email"
              ref={email}
              placeholder={SignUp ? "Email / Username" : "Email"}
              className="mt-2 w-full p-3 text-white bg-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          {!SignUp && (
            <div>
              <label htmlFor="name" className="font-semibold block mt-3">Name</label>
              <input
                type="text"
                id="name"
                ref={name}
                placeholder="Name"
                className="mt-2 w-full p-3 text-white bg-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
          <div>
            <label htmlFor="password" className="font-semibold block mt-3">Password</label>
            <input
              type="password"
              id="password"
              ref={password}
              placeholder="Password"
              className="mt-2 w-full p-3 text-white bg-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-red-600 bg-gray-900 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-red-600 hover:underline">Need help?</a>
          </div>
          <div id="errorMassage" className="text-red-600 font-mono">
            {errorMassage == null ? "" : errorMassage}
          </div>
          <div className="w-full text-center">
            <button type="submit" className="mt-4 w-full p-3 font-semibold text-white bg-red-600 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={e => { e.preventDefault(); handleButtonClick(); }}>
              {SignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-400">
          <p>{SignUp ? "New to Netflix?" : "Old to Netflix?"} <a href="#" onClick={handleSignUp} className="text-red-600 hover:underline">{SignUp ? "Sign up now" : "Sign In now"}</a></p>
          <p className="mt-2">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-600 hover:underline">Learn more</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
