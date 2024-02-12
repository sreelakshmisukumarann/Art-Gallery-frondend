import React from 'react';
import './ArtCard.css';

function ArtCard() {
  return (
    <div className='container' style={{ position: 'relative' }}>
     <section className="service mt-5" id="service">
      <div className="container">
        <div className="main-txt">
          <h2>Services</h2>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          {/* Start first row */}
          <div className="col-md-4 col-sm-6 py-3 py-md-0">
            <div className="card">
            <i class="fa-solid fa-palette"></i>
              <div className="card-body">
                <h4>Art Exhibition</h4>
                <p>
                Provide gallery space for artists to showcase their work.                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 py-3 py-md-0">
            <div className="card">
            <i class="fa-solid fa-truck"></i>
              <div className="card-body">
                <h4>Free Shipping</h4>
                <p>
                It’s simple: we’ll cover the shipping. Oversize shipping charges may apply.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 py-3 py-md-0">
            <div className="card">
            <i class="fa-brands fa-cc-amazon-pay"></i>
              <div className="card-body">
                <h4>Secure Payments</h4>
                <p>
                Transmitting sensitive information like credit card details</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          {/* Start second row */}
          {/* <div className="col-md-4 col-sm-6">
            <div className="card">
              <i className="fa-solid fa-earth-americas"></i>
              <div className="card-body">
                <h4>Around the World</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et placeat debitis.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 col-sm-6">
            <div className="card">
              <i className="fa-solid fa-plane-departure"></i>
              <div className="card-body">
                <h4>Ticket Booking</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et placeat debitis.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 col-sm-6">
            <div className="card">
              <i className="fa-solid fa-parachute-box"></i>
              <div className="card-body">
                <h4>Adventures</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et placeat debitis.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    
    </div>
  );
}

export default ArtCard;
