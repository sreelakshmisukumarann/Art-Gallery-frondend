import React, { useEffect, useState } from 'react'
import { AllProfileAPI } from '../../services/allAPI';
import { BASE_URL } from '../../services/baseurl';
import AdminSidebar from './AdminSidebar';
import proimg from '../Admin/profilicon.jpg'


function AdminArtisView() {
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const fetchArtists = async () => {
          try {
            const result = await AllProfileAPI();
            console.log(result.data);
            // Filter users with role 'user'
            const filteredUsers = result.data.filter(item => item.role === 'artist');
            setArtist(filteredUsers);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
        fetchArtists();
      }, []);
  return (
    <>
         <div className='d-flex'>
            <div>
                <AdminSidebar/>
            </div>
            <div>
             
           <div className='d-flex justify-align-center align-items-center '>
              <table className="table align-middle mb-0 bg-white mt-5 ms-5" style={{width:'900px'}}>
                 <thead className="bg-light">
                  <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    {/* <th>Actions</th> */}
                  </tr>
                 </thead>
                 {artist?.length>0?
                 artist.map((item)=>(<tbody>
                  <tr>
                 <td>
                  <div className="d-flex align-items-center">
                  <img
                    src={item ? `${BASE_URL}/profileuploads/${item.profileImg}` : proimg}
                   alt=""
                     style={{ width: '45px', height: '45px' }}
                     className="rounded-circle"
                 />
                   {/* <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                     <p className="text-muted mb-0">john.doe@gmail.com</p>
                   </div> */}
             </div>
              </td>
   
               <td>
            <p className="fw-bold mb-1">{item.name}</p>
            </td>
   
             <td>
               <p className="text-muted mb-0">{item.country}</p>
             </td>
              <td>{item.phnumber}</td>
         {/* <td>
           <button type="button" className="btn btn-link btn-sm btn-rounded">
             Edit
           </button>
         </td> */}
              </tr>
      
                  </tbody>)):<p>No registered user</p>}
              </table>;
           </div>

            </div>
       </div>
    </>
  )
}

export default AdminArtisView