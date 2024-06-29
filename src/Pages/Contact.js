import React from 'react';
import './AboutContact.css';
import Header from '../Components/AppBar';
import Footer from '../Components/Footer';


const Contact = () => {

  return (
   
    <div className="background2">
    <Header/>
      <div className="contact-page">
      
        <header className="main-header">Contact</header>
        <div className="header-contact">For general inquiries:</div>
        <div className="contact-form">
          <form>
          
            <input type="text" id="name" name="name" placeholder="Your name" />

            
            <input type="email" id="email" name="email" placeholder="Your email" />

          
            <input type="text" id="subject" name="subject" placeholder="Subject" />

           
            <textarea id="message" name="message" placeholder="Your message"></textarea>
            <br />
            <button
              type="button"
              onClick={() => console.log('Sending message')}
              style={{ marginLeft: '200px',borderRadius:'14px' }} // Adjust the margin-left here
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;