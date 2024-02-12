import React, { useState, useEffect } from 'react';
import './Frame.css';

function Frame() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const images = [
    'https://imgc.artprintimages.com/img/print/stella-chang-golden-boy-golden-kiss_u-l-q1rtv320.jpg?background=f3f3f3',
    'https://imgc.artprintimages.com/img/print/fabian-lavater-making-a-mess_u-l-q1rwn1z0.jpg?background=f3f3f3',
    'https://imgc.artprintimages.com/img/print/fabian-lavater-coral-head_u-l-q1rwiaf0.jpg?background=f3f3f3',
    // Add more image URLs as needed
  ];

  const images1 = [
    'https://imgc.artprintimages.com/img/print/arty-guava-thecrysanthemum_u-l-q1rvz3g0.jpg?background=f3f3f3',
    'https://imgc.artprintimages.com/img/print/arty-guava-sun-worship_u-l-q1rvtiy0.jpg?background=f3f3f3',
    'https://imgc.artprintimages.com/img/print/arty-guava-lazydays_u-l-q1rvqg00.jpg?background=f3f3f3'
    // Add more image URLs as needed
  ];

  const images2 = [
    'https://imgc.artprintimages.com/img/print/alisa-galitsyna-linocut-plant_u-l-q1raq5b0.jpg?background=f3f3f3', // Example fixed image 1
    'https://imgc.artprintimages.com/img/print/tara-reed-cicada-on-mauve_u-l-q1rtuuv0.jpg?background=f3f3f3', // Example fixed image 2
    'https://imgc.artprintimages.com/img/print/arty-guava-moonlightdance_u-l-q1rv0gq0.jpg?background=f3f3f3', // Example fixed image 3
  ];

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    const intervalId2 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 2000);

    const intervalId3 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 2000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [images.length, images1.length, images2.length]);

  return (
    <div className='container mt-2' style={{ position: 'relative' }}>
      {/* <h3>Shop ArtNook Collections</h3> */}
      <hr />
      <div className='row mt-5'>
        <div className='col-md-4' style={{ backgroundColor: 'white' }}>
        {/* style={{ backgroundColor: '#dfbd51' }} */}
          <div className='p-5'>
            <h3>Introducing</h3>
            <h1>ArtNook Artist Collection</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dolores omnis nemo vero eum voluptas? Possimus eius voluptatum
              impedit quibusdam recusandae ad pariatur nostrum autem dolorum
              expedita, magnam laboriosam accusamus aut.
            </p>
            <a href="">
              <h1>
                <button className='btn btn-outline-warning'>Shop new Collections</button>
              </h1>
            </a>
          </div>
        </div>

        <div
          className='col-md-3'
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}
        ></div>
        <div
          className='col-md-2'
          style={{
            backgroundImage: `url(${images1[currentImageIndex1]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}
        ></div>
        <div
          className='col-md-3'
          style={{
            backgroundImage: `url(${images2[currentImageIndex2]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
          }}
        ></div>
      </div>
      <hr />
    </div>
  );
}

export default Frame;
