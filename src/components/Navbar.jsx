import React, { Component } from "react";

class Navbar extends Component {
   state = {};
   render() {
      return (
         //Navbar Declaration
         <React.StrictMode className="navbarMain">
            <nav className="navbar navbar-expand-lg navbar-light">
               <a className="navbar-brand" href="#">
                  Topolify
               </a>
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
                        <a className="nav-link" href="/devsoftian.github.io/">
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           href="/devsoftian.github.io/topolify/"
                        >
                           Topotracker
                           {/* <span class
                  Name="sr-only">(current)</span> This is a text indicating that this is the current location. */}
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link"
                           href="/devsoftian.github.io/bugsleuth/"
                        >
                           BugSleuth
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </React.StrictMode>
      );
   }
}

export default Navbar;
