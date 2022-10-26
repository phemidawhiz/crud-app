import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./authpage.css";
const AuthPage = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className="auth-page py-4 md:py-0 w-screen min-h-screen flex flex-row justify-center items-center bg-no-repeat bg-cover bg-light bg-[url('/src/assets/auth-bg.svg')]">
      <section className="lg:w-[40%] md:w-[60%] max-w-[800px] md:max-h-[600px] w-[90%] rounded shadow-md p-8 pb-8 bg-white">
        <div className="flex flex-row w-[100%] justify-between gap-4">
          <header
            className={`w-[50%] text-center cursor-pointer p-2 ${
              tab === "signup"
                ? "border-purple border-b-2"
                : "border-light border-b-2"
            }`}
            onClick={() => setTab("signup")}
          >
            <h2 className="font-medium text-lg">Sign up</h2>
          </header>
          <header
            className={`w-[50%] text-center cursor-pointer p-2 ${
              tab === "login"
                ? "border-purple border-b-2"
                : "border-light border-b-2"
            }`}
            onClick={() => setTab("login")}
          >
            <h2 className="font-medium text-lg">Login</h2>
          </header>
        </div>
        {tab === "login" && <Login setTab={setTab} />}
        {tab === "signup" && <Signup setTab={setTab} />}
      </section>
    </div>
  );
};

export default AuthPage;
