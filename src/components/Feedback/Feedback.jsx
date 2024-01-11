import React from 'react'
import './Feedback.css'
import { Link } from 'react-router-dom';

function Feedback() {


  const handleFeedback = () => {

    alert('Feedback submited');

  };

  return (
    <div className="main">
      <div className="feedbaack-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Bhandup West</div>
              <div className="text-two">Mumbai 78</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">7021117450</div>
              <div className="text-two">9320483592</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">Benzbakery@gmail.com</div>
              <div className="text-two">akashyadav@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">FEEDBACK FORM</div>
            <div>
              <div className="input-box">
                <input
                  type="text"
                  id="feedbackname"
                  placeholder="Enter your name"
                  required
                  style={{ textTransform: 'none' }}
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  id="femail"
                  placeholder="Enter your email"
                  required
                  style={{ textTransform: 'none' }}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  id="productname"
                  placeholder="Product name"
                  required
                  style={{ textTransform: 'none' }}
                />
              </div>
              <div className="input-box">
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  style={{ textTransform: 'none' }}
                ></textarea>
              </div>
              <div className="button">
                <Link
                  id="feedback_btn"
                  className="f_btn"
                  type="submit"
                  onClick={handleFeedback}
                  to={"/benzbakery-web-app/"}
                >
                  Submit Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback