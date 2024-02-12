import React from 'react'
import { Link } from 'react-router-dom'
import proimg from '../assests/artist.jpeg'
import { BASE_URL } from '../services/baseurl';

function Artistcard({profileinfo}) {

  console.log(profileinfo.profileImg);
  return (
    <div className='rounded shadow p-1 me-1' style={{width:'500px',height:'340px'}}>
        <div className=''>
            <div className='mt-2'>
            
            <img src={profileinfo?`${BASE_URL}/profileuploads/${profileinfo.profileImg}`:proimg} alt="" width={170} height={170} className='rounded-circle' />
                    
            </div>
            <div className='mt-4'>
                <h4>{profileinfo.name}</h4>
                <h5 style={{fontWeight:'lighter'}} className='mt-2'>Artist</h5>
                <Link to={`/view-artist/${profileinfo._id}`}><button className='btn mt-2' style={{color:'white',background:'black'}}>View</button></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Artistcard