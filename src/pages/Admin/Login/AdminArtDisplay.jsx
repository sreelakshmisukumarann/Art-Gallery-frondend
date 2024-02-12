import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import './AdminArtDisplay.css';
import { AllArtAPI, updateArtworkStatusAPI } from '../../../services/allAPI';
import img from '../Login/artimgeicon.jpg'
import { BASE_URL } from '../../../services/baseurl';

function AdminArtDisplay() {
  const [artworks, setArtworks] = useState([]);

  const handleApprove = async (artworkId) => {
    try {
      const reqHeader = { Authorization: 'Bearer secretAdmin123' };
      await updateArtworkStatusAPI(artworkId, 'Approved', reqHeader);

      // Update the state to reflect the new status
      setArtworks((prevArtworks) =>
        prevArtworks.map((artwork) =>
          artwork._id === artworkId ? { ...artwork, status: 'Approved' } : artwork
        )
      );

      // Show alert
      alert('Artwork approved!');
    } catch (error) {
      console.error('Error approving artwork:', error);
    }
  };

  const handleReject = async (artworkId) => {
    try {
      const reqHeader = { Authorization: 'Bearer secretAdmin123' };
      await updateArtworkStatusAPI(artworkId, 'Rejected', reqHeader);

      // Update the state to reflect the new status
      setArtworks((prevArtworks) =>
        prevArtworks.map((artwork) =>
          artwork._id === artworkId ? { ...artwork, status: 'Rejected' } : artwork
        )
      );

      // Show alert
      alert('Artwork rejected!');
    } catch (error) {
      console.error('Error rejecting artwork:', error);
    }
  };

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const result = await AllArtAPI();
        console.log(result.data);
        setArtworks(result.data);
      } catch (error) {
        console.error('Error fetching artwork:', error);
      }
    };
    fetchArtworks();
  }, []);

  return (
    <>
      <div className="d-flex">
        <div>
          <AdminSidebar />
        </div>
        <div className='shadow ms-5 mt-2'>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                  <h2 className="heading-section mt-5" style={{color:'#e3abdb'}}>ArtWorks</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-wrap">
                    <table className="table table-responsive-xl">
                      <thead>
                        <tr>
                          <th>Art Title</th>
                          <th>Artist</th>
                          <th>Art</th>
                          <th>Status</th>
                          <th>Actions</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {artworks?.length > 0 ? (
                          artworks.map((item) => (
                            <tr className="alert" role="alert" key={item._id}>
                              <td className="d-flex align-items-center">
                                <div className="img" style={{ backgroundImage: 'url(images/person_1.jpg)' }}></div>
                                <div className="pl-3 email">
                                  <p>{item.title}</p>
                                  <br />
                                  
                                </div>
                              </td>
                              <td>{item.name}</td>
                              <td className="status">
                                <img
                                  src={item ? `${BASE_URL}/uploads/${item.artImg}` : img}
                                  alt=""
                                  width={140}
                                  height={150}
                                /><br/>
                                <small>{item.created_at}</small>
                              </td>
                              <td>{item.status}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning"
                                  data-dismiss="alert"
                                  aria-label="Close"
                                  onClick={() => handleApprove(item._id)}
                                >
                                  Approve
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger ms-2"
                                  data-dismiss="alert"
                                  aria-label="Close"
                                  onClick={() => handleReject(item._id)}
                                >
                                  Reject
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p>No work sended for approvel</p>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminArtDisplay;
