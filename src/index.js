import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BugSleuth from "./components/BugSleuth";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import store from "./components/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
   // Route Declarations
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/devsoftian.github.io/" element={<LoginForm />} />
            <Route
               path="/devsoftian.github.io/bugsleuth/"
               element={<BugSleuth />}
            />
            <Route path="/devsoftian.github.io/topolify/" element={<App />} />
            <Route
               path="/devsoftian.github.io/signup/"
               element={<SignupForm />}
            />
         </Routes>
      </BrowserRouter>
   </StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
