import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar";
import BugSleuth from "./components/bugSleuth";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";

ReactDOM.render(
   // Route Declarations
   <BrowserRouter>
      <Routes>
         <Route path="/devsoftian.github.io/" element={<LoginForm />} />
         <Route
            path="/devsoftian.github.io/bugsleuth/"
            element={<BugSleuth />}
         />
         <Route path="/devsoftian.github.io/topolify/" element={<App />} />
         <Route path="/devsoftian.github.io/signup/" element={<SignupForm />} />
      </Routes>
   </BrowserRouter>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
