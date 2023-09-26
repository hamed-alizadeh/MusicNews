import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function RootLayOut() {
  return (
    <div className="root-layout">
      <div className="top-head">
        <div className="top-img-left">
          <img src="src/World Music.png" alt="Left Image" />
        </div>
        <div className="top-img-middle">
          <img src="src/light (1).png" alt="Middle Image" />
        </div>
        <div className="top-img-right">
          <img src="src/World Music.png" alt="Right Image" />
        </div>
      </div>

      <header>
        <nav className="navbar">
          <NavLink to="/">Home page</NavLink>
          <NavLink to="/Hits">Hits</NavLink>
          <NavLink to="/World">World</NavLink>
          <NavLink to="/Asian">Asian</NavLink>
          <NavLink to="/Eroupian">Eroupian</NavLink>
          <NavLink to="/USA">USA</NavLink>
          <NavLink to="/African">African</NavLink>
          <NavLink to="/Iran">Iarn</NavLink>
          <NavLink to="/Arabic">Arabic</NavLink>
          <NavLink to="/Turkish">Turkish</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/SignUp">Sign-up</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayOut;
