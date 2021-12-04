import React from 'react'
import HomePage from '../../Pages/HomePage';
import './style.css'

const Navbar = () => {

  function onClick (e){

  }

    return (
      <div className = "navWrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand">Reconnect</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link active" href="#">About Us</a>
        <a className="nav-link active" href="#">Create an account</a>
        <a className="nav-link" href="#"></a>
      </div>
    </div>
  </div>
</nav>
</div>
    );
}

export default Navbar;


 
