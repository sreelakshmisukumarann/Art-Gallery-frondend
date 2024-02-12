// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f text-warning"></i>
          </a>
          <a href="" className="me-4 text-reset ">
            <i className="fab fa-twitter text-warning"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google text-warning"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram text-warning"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin text-warning"></i>
          </a>
          {/* <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a> */}
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 text-warning">
                <i className="fas fa-gem me-3"></i>ArtNook.com
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-warning">
                ArtNook
              </h6>
              <p>
                <a href="#!" className="text-reset underline">Home</a>
              </p>
              <p>
                <a href="/artwork" className="text-reset underline">Art work</a>
              </p>
              <p>
                <a href="" className="text-reset underline">Artist</a>
              </p>
              
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-warning">
                Useful links
              </h6>
              <p>
                <a href="/login" className="text-reset underline">Login</a>
              </p>
              <p>
                <a href="/register" className="text-reset underline">Register</a>
              </p>
              <p>
                <a href="#!" className="text-reset underline">Logout</a>
              </p>
              
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-warning">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'black' ,color:'whitesmoke'}}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">ArtNook.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
