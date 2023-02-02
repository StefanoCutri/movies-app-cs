import "../styles/navbar.css";
import logoImg from "../assets/StefanoMovies-1.png";
import { useRef } from "react";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="search-bar" ref={navRef}>
        <input className="input" placeholder="Search movies" />
      </div>
      <div className="toggle-button" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};
