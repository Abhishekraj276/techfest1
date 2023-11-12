
import React from 'react';
import './Navbar.css'; // Make sure to adjust the path based on your project structure

// React component for the Contact section
const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>CONTACT US</h2>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Katihar Engineering College, <br />
                Hirdayganj,Katihar,<br />
                854109
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>9835037718-Abhishek raj</p>
              <p>7257827104-Mohit Kumar</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>katihartechfest01@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>send message</h2>
            <div className="inputbox">
              <input type="text" name="" required="required" />
              <span>Full name</span>
            </div>
            <div className="inputbox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea required="required"></textarea>
              <span>text your message..</span>
            </div>
            <div className="inputbox">
              <input type="submit" name="" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
