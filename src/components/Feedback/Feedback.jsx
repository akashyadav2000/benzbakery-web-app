import React from 'react'
import './Feedback.css'
import { Link } from 'react-router-dom';

function Feedback() {

  return (
    <div class="contact-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="contact-left"
      >
        <div class="contact-left-title">
          <h1>Feedback Form</h1>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="8c8947fa-a38e-4679-be7d-d0dd2267fcbf"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          class="contact-inputs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          class="contact-inputs"
          required
        />
        <input
          type="text"
          name="Product name"
          placeholder="Product Name"
          class="contact-inputs"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          class="contact-inputs"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      <div class="contact-right">
        <img src="./Images/flower.jpg" alt="" />
      </div>
    </div>
  )
}

export default Feedback