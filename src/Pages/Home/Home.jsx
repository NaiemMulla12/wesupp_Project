import React from 'react';
import './Home.css'; // Import the CSS file for styling
import webdev from './webdev.png'
import mobile from "./appdev.png"
import wordpress from './wordpress.png'
import uiux from './uiux.png'
import digitalmarket from './Digital Market.png'
import datana from './data analyst.png'

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Wesupp</h1>
          <p>Your Partner in IT Solutions</p>
          {/* <button>Contact Us</button> */}
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Wesupp, we're dedicated to providing top-notch IT solutions tailored to meet your business needs.
            With our team of experienced professionals, we strive to deliver excellence in every project we undertake.
          </p>
          <p>
            Whether you're a startup looking to establish your online presence or a large enterprise seeking to optimize
            your IT infrastructure, we've got you covered.
          </p>
        </div>
      </section>

      <section className="services-section">
          <h2>Our Services</h2>
        <div className="services-content">
          
          <div className="service-card">
            <img src= {webdev} alt="" />
            <h3>Web Development</h3>
            <p>From simple websites to complex web applications, we build it all with the latest technologies.</p>
          </div>
          <div className="service-card">
          <img src={mobile} alt="" />
            <h3>Mobile App Development</h3>
            <p>Turn your app idea into reality with our expert mobile app development services.</p>
          </div>
          <div className="service-card">
            <img src={wordpress} alt="" />
            <h3>Wordpress</h3>
            <p>Maximize efficiency and flexibility with our cloud-based solutions tailored to your business.</p>
          </div>
          <div className="service-card">
            <img src={uiux} alt="" />
            <h3>UI UX</h3>
            <p>From simple websites to complex web applications, we build it all with the latest technologies.</p>
          </div>
          <div className="service-card">
            <img src={digitalmarket} alt="" />
            <h3>Digital Marketing</h3>
            <p>From simple websites to complex web applications, we build it all with the latest technologies.</p>
          </div>  <div className="service-card">
            <img src={datana} alt="" />
            <h3>Analysis</h3>
            <p>From simple websites to complex web applications, we build it all with the latest technologies.</p>
          </div>
          
        </div>
      </section>

      <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>

      
    </div>
  );
};

export default Home;
