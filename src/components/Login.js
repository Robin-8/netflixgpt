import React, { useState, useRef } from "react";
import { BG_IMG } from "./utils/constonts";
import Validation from "./utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux"; // Import useDispatch

import Header from "./Header";

import { addUser } from "./utils/userSlice";

const Login = () => {
  const dispatch = useDispatch(); // Define dispatch
  const [signUp, setSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const userName = nameRef.current ? nameRef.current.value : "";
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;

    const message = Validation(userEmail, userPassword, userName, signUp);
    setErrorMessage(message);
    if (message) return;

    if (signUp) {
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: userName, // Fixed this line
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("Signed Up:", user);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message, error.code);
        });
    } else {
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error.message, error.code);
        });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
    setErrorMessage("");
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src={BG_IMG}
          alt="back-image"
        />
      </div>
      <div className="relative flex justify-center items-center h-screen">
        <form
          onSubmit={handleButtonClick}
          className="absolute w-3/12 p-12 mx-auto text-center my-52 left-0 right-0 bg-black h-auto opacity-85"
        >
          <h1 className="text-white text-4xl text-left mb-6 font-bold">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter your name"
              className="p-2 mb-4 w-full bg-gray-600 text-white font-semibold"
            />
          )}
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            className="p-2 mb-4 w-full bg-gray-600 text-white font-semibold"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
            className="p-2 mb-4 w-full bg-gray-600"
          />
          <p className="text-red-500 mb-0">{errorMessage}</p>
          <button type="submit" className="bg-red-700 p-2 w-full">
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="flex justify-start items-center text-white mt-4">
            <p>{signUp ? "Already have an account?" : "New to Netflix?"}</p>
            <button
              onClick={handleClick}
              className="text-red-700 font-semibold ml-2"
            >
              {signUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
