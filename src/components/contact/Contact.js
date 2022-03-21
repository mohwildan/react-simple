import React from 'react'
import './Contact.css'

function Contact() {
  return (
      <section id='contact'>
      <div className="contact">
          <div className="contact-container">
          <h1>Contact Me</h1> 
          <h2>Thansk for <span>contact me</span></h2>
          <div className="box-contact">
            <div className="name-email">
            <h3>Your Name</h3>
            <input type="text" placeholder='Mohammad Wildan'/>
            <h3>Your Email</h3>
            <input type="text" placeholder='mohwildanwildan15@gmail.com'/>
            <div className="send-button">
              <textarea required='required'></textarea>
              <div className="button">
                <a href="">Send</a>
              </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      </section>
  )
}

export default Contact