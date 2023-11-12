
import React from 'react';
import './Navbar.css'; 
// eslint-disable-next-line no-unused-vars

const AboutUs = () => {
  return (
    <div className="wrapper">
      <video className="background-video" autoPlay muted loop>
        <source src="./Aboutus/bg3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-container">
        <div className="./Aboutus/bg-1"></div>
        <div className="./Aboutus/bg-2"></div>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src="/AboutUs/aboutus2.jpg" alt="" />
          <img src="/AboutUs/aboutus3.jpg" alt="" />
        </div>
        <div className="text-container">
          <h1>About us</h1>
          <div className="box">
            <div className="hid-box">
              <p>
                TECHKEC'23 is the annual science and technology festival of KEC, KATIHAR which is organized by Cultural
                Club that is going to be held on 28th -30th October 2023 in fully offline mode. KECMITi comprises a
                diverse array of competitive technical events, exhibitions, workshops, and guest speakers that attract
                the participation of students from engineering institutes all across the nation. The 3-day fest
                congregation is expected to have 4,000+ footprints gathering from various technical institutes to
                participate in and witness the TECHKEC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
