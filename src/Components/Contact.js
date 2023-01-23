import React from 'react'
import "./css/Contact.css"

function Contact() {
  return (
    <div className="Contact">
        <div class="form-row">
          <label for="name" class="form-label">Your Name</label>
          <input type="text" name="name" id="name" class="form-input" />
        </div>
        <div class="form-row">
          <label for="email" class="form-label">Your Email</label>
          <input type="email" name="email" id="email" class="form-input" />
        </div>
        <div class="form-row">
          <label for="message" class="message">Message</label>
          <textarea name="message" id="message" class="from-textarea"></textarea>
        </div>
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table"/>
        <button type="submit" class="btn btn-block">submit</button>
    </div>
  )
}

export default Contact
