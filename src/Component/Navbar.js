import React from 'react';
import './Styles/Navbar.css';



const Navbar = ({setLogin}) => {
  const handleclick = () => {
    setLogin(true);
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid mt-2">
        <a className="navbar-brand" href="/">
          <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home
              </a>
              <div className="dropdown-menu" aria-labelledby="homeDropdown">
                <a className="dropdown-item" href="/">Main Home</a>
                <a className="dropdown-item" href="/">Home Article</a>
                <a className="dropdown-item" href="/">Landing Page</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">
                <a className="dropdown-item" href="/">Our Service</a>
                <a className="dropdown-item" href="/">Service Detail</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="blogDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="blogDropdown">
                <a className="dropdown-item" href="/">Blog List</a>
                <a className="dropdown-item" href="/">Blog Detail</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
          <button className="Search-Button btn btn-outline-primary" onClick={() => handleclick()}>Login/Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
