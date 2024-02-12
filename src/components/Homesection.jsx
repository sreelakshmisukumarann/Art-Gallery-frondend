import React from 'react'

function Homesection() {
  return (
    <div style={{width:'100%',height:'auto', position:'relative'}}>

     <section style={{ backgroundColor: '#eee' }} className='mt-5'>
      <div className="container py-5">
        <h4 className="text-center mb-5"><strong>Art Exhibition</strong></h4>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src="https://cdn.theculturetrip.com/wp-content/uploads/2017/10/art-gallery.jpg" className="w-100" alt="Product 1" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Exibition</span></h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100" alt="Product 1" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Exibition</span></h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src="https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" className="w-100" alt="Product 1" />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Exibition</span></h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                </div>
              </a>
            </div>
          </div>

          {/* ... Repeat similar structure for other product items ... */}

        </div>

        {/* ... Additional rows of product items ... */}
        
        
      </div>
    </section>

    </div>
  )
}

export default Homesection