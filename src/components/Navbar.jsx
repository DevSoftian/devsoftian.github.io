import React, { Component } from "react";
import { Link } from "react-router-dom";

/*Navbar component

         Navigates between Topotracker, Bugsleuth, and Login pages. */

class Navbar extends Component {
   state = {};
   render() {
      return (
         //Navbar Declaration
         <React.StrictMode className="navbarMain">
            <nav className="navbar navbar-expand-lg navbar-light">
               <Link className="navbar-brand" to="#">
                  Topolify
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               {/* Navbar buttons */}
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/devsoftian.github.io/">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link
                           className="nav-link"
                           to="/devsoftian.github.io/topolify/"
                        >
                           Topotracker
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link
                           className="nav-link"
                           to="/devsoftian.github.io/bugsleuth/"
                        >
                           BugSleuth
                        </Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </React.StrictMode>
      );
   }
}

export default Navbar;
