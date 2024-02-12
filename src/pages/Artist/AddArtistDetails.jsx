import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { addProfileAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';

function AddArtistDetails() {

    const navigate = useNavigate()

    //profile details
    const [profiledetails, SetProfileDetails] = useState({
        place:"",
        country:"",
        phnumber:"",
        about:"",
        profileImg:""
    })
    console.log(profiledetails);

    //clear form
    const clear = ()=>{
        SetProfileDetails({
            place:"",
            country:"",
            phnumber:"",
            about:"",
            profileImg:""
        })
        SetImgurl("")
    }

    //to hold the url of image
    const[imgurl, SetImgurl] = useState("")

     //to store tokens
     const [token, setToken] = useState("")
    
    useEffect(()=>{
        if(profiledetails.profileImg){
            SetImgurl(URL.createObjectURL(profiledetails.profileImg))
        }
    },[profiledetails.profileImg])

    console.log(imgurl);

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }
        else{
            setToken("")
        }
    },[])
    console.log(token);

    const addprofile = async(e)=>{
       e.preventDefault()
    
       const {place, country, phnumber,about,profileImg} = profiledetails

       if(!place || !country || !phnumber || !about ||!profileImg){
        alert('please fill in the form compleatly')
       }
       else{
            const reqBody = new FormData()

            reqBody.append("place",place)
            reqBody.append("country",country)
            reqBody.append("phnumber",phnumber)
            reqBody.append("about",about)
            reqBody.append("profileImg",profileImg)
           

           if(token) {
            const reqHeader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            const result = await addProfileAPI(reqBody,reqHeader)
            console.log(result);

            if(result.status===200){
                alert('Profile successfully added')
                clear()
                navigate('/artist-dashboard')
                
            }
            else{
                console.log(result);
                alert(result.response.data)
            }
       }}
    }

  return (
    <div>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
            <h2 className='mt-5'>Add Profile Information</h2>
            <div className='mt-3 shadow rounded'>
                <label>
                    <input type="file" style={{display:'none'}} onChange={(e)=>SetProfileDetails({...profiledetails,profileImg:e.target.files[0]})} />
                    <img src={imgurl?imgurl:"https://th.bing.com/th/id/OIP.hpeT8M3psowbBvVq__YZ4AHaHu?rs=1&pid=ImgDetMain"} alt="" width={200} />
                </label>
               <div className='mt-4'>
                    <input type="text" placeholder='Place' className='form-control' value={profiledetails.place} onChange={(e)=>SetProfileDetails({...profiledetails,place:e.target.value})} /><br />

                    <input type="text" placeholder='Country' className='form-control' value={profiledetails.country} onChange={(e)=>SetProfileDetails({...profiledetails,country:e.target.value})} /><br />

                    <input type="Number" placeholder='Phone Number' className='form-control' value={profiledetails.phnumber} onChange={(e)=>SetProfileDetails({...profiledetails,phnumber:e.target.value})} /><br />

                    <textarea name="" id="" cols="10" rows="3" placeholder='About' className='form-control' value={profiledetails.about} onChange={(e)=>SetProfileDetails({...profiledetails,about:e.target.value})}></textarea>
                  <div className='mt-4 mx-auto'>
                        <button className='btn btn-warning mb-3' onClick={addprofile}>Add</button>
                        <button className='btn btn-success ms-3 mb-3' onClick={clear}>Cancle</button>
                  </div>

               </div>
            </div>
            </Col>
            <Col lg={3}></Col>
        </Row>
    </div>
  )
}

export default AddArtistDetails