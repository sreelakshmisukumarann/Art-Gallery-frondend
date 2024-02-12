import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { addArtAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';

function AddArtWork() {

    //state to change input value
    const [addwork, SetAddWork] = useState({
        title:"",
        description:"",
        copy:"",
        price:"",
        category:"",
        artImg:""
    })
    console.log(addwork);

    const clearall = ()=>{
        SetAddWork({
        title:"",
        description:"",
        copy:"",
        price:"",
        category:"",
        artImg:""
        })
        SetImgurl("")
    }

    //to hold the url of image
    const[imgurl, SetImgurl] = useState("")

    //to store tokens
    const [token, setToken] = useState("")

    const navigate = useNavigate()


    const add = async(e)=>{
        e.preventDefault()

        const {title, description, copy, price, category, artImg} = addwork

        if(!title || !description || !copy || !price || !category || !artImg){
            alert('Please fill in the form completedly')
        }
        else{
            // here we have uploading content so body will send form data
            
            //1.create object for the class form data
            const reqBody = new FormData()
            //2.add value to the form data
            reqBody.append("title",title)
            reqBody.append("description",description)
            reqBody.append("copy",copy)
            reqBody.append("price",price)
            reqBody.append("category",category)
            reqBody.append("artImg",artImg)

            if(token)
            {const reqHeader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }

            const result = await addArtAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
                alert('Art work successfully added')
                clearall()
                navigate('/artist-dashboard')
                
            }
            else{
                console.log(result);
                alert(result.response.data)
            }
        }}
    }

    useEffect(()=>{
        if(addwork.artImg){
            SetImgurl(URL.createObjectURL(addwork.artImg))
        }
    },[addwork.artImg])

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

    const isArtist = token && token.role === "artist";

  return (
    <div>
        {/* <input type="file" /> */}
        <Row>
            <Col lg={2}>
      
            </Col>
            <Col lg={8}>
                <div className='mt-3 shadow rounded'>
                    <h2 className='mt-2'>Add Your Art Work</h2>
                    <div className=' p-2'>
                    <label> 
                        <input type="file" style={{display:'none'}} onChange={(e)=>SetAddWork({...addwork,artImg:e.target.files[0]})} />
                        <img src={imgurl?imgurl:"https://img.freepik.com/free-photo/abstract-backdrop-with-multi-colored-decoration-generative-ai_188544-12870.jpg?w=1380&t=st=1706858403~exp=1706859003~hmac=de8bc15776de37f9dae0c209415807b51472cc4cbee00ed60c5c71e288f30735"} alt="no image" width={300} height={350} />
                   </label>
                    </div>
                    <div  className='mt-3 rounded'>
                    <input className='form-control mt-3' type='text' placeholder='Art Title' value={addwork.title} onChange={(e)=>SetAddWork({...addwork,title:e.target.value})}></input>
                    <textarea className='form-control mt-3' type='text' placeholder='Description' value={addwork.description} onChange={(e)=>SetAddWork({...addwork,description:e.target.value})}></textarea>
                    <input className='form-control mt-3' type='number' placeholder='No of Copy' value={addwork.copy} onChange={(e)=>SetAddWork({...addwork,copy:e.target.value})}></input>

                    <input className='form-control mt-3' type='number' placeholder='Price' value={addwork.price} onChange={(e)=>SetAddWork({...addwork,price:e.target.value})}></input>
                    
                    <label htmlFor="Select Category" className='mt-2'>Select Category </label>
                    <select id="category" name="category" required value={addwork.category} onChange={(e)=>SetAddWork({...addwork,category:e.target.value})}>
                    <option value=""></option>
                    <option value="painting">Painting</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="photography">Photography</option>
                    <option value="painting">Digital Art</option>
                    <option value="painting">Mixed Media</option>
                    <option value="painting">Decorative</option>
                    <option value="painting">Botanicals</option>
                    <option value="painting">Places</option>
                    <option value="painting">Traditional</option>
                    <option value="painting">Graphic</option>
                    <option value="painting">Other</option>
                   
                </select>

                    <div className='mx-auto p-2 ms-1'>
                        <button className='btn btn-dark' onClick={add}>Add Work</button>
                        <button className='btn btn-danger ms-5' onClick={clearall}>Cancle</button>
                    </div>

                    </div>
                </div>
            </Col>
            <Col lg={2}></Col>
        </Row>
    </div>
  )
}

export default AddArtWork