import React from 'react';
import  "./Navbar.css";

const Home = () => {
  return (
    <>
      
      <div className="landingpage">
      <div className="Navbar-brand">
          <img src={'/image/logok.png'} alt="logo" width="100px" height="100px" />
        </div>
        
      <video autoPlay loop muted playsInline className="back-video">
        <source src="video/background5.mp4" type="video/mp4" />
      </video>
      <div className='back-video-overlay'></div>
      <div className="overlay">
          <h1>TECHKEC'23</h1>
      </div>

      <div className="date">

          <div className="absolute z-20 centermaindates">


         < h1 style={{ textAlign: 'center' }}>10<sup>th</sup>to
                  15<sup>th</sup></h1>
              <h1>December 2023</h1>
          </div>
      </div>

      <div class="bouncing-text">

      </div>
      </div>

    </>
  );
}

export default Home;

