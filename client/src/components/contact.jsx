import emailjs from '@emailjs/browser'
import { useState } from 'react'
import '../styles/Contact.css'

function ContactForm() {

  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: '' })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_dabri2d',
        'template_jwbijsc',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `${formState.name}, Thanks for sending a message! I will get back to you ASAP!`
          )
        },
        function (error) {
          alert('Sorry!', error)
        }
      )
    setFormState(initialState)
  }

  return (
      <div id="contact-form">
       <form onSubmit={handleMessage} method="post" action="/">
      <div>
          <label for="name">
            <span className="required">Name:</span> 
            <input onChange={handleChange} type="text" id="name" name="name" value={formState.name} placeholder="Your Name" required="required" tabindex="1" />
          </label> 
      </div>
      <div>
          <label for="email">
            <span className="required">Email:</span>
            <input onChange={handleChange} type="email" id="email" name="email" value={formState.email} placeholder="Your Email" tabindex="2" required="required" />
          </label>  
      </div>
      <div>             
          <label for="subject">
          <span className="required">I am contacting you because...</span>
            <select onChange={handleChange} id="subject" name="subject" tabindex="4">   
              <option value="wants to book a tattoo">I need a tattoo!</option> 
              <option value="wants to give a review">I want to give a review!</option>
              <option value="sent a general message">I want to say, "Hi!"</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="message">
            <span className="required">Message:</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>              
        <button onClick='handleMessage()' name="submit" type="submit" id="submit" >SEND</button> 
      </div>
      </form>
  </div> 
  )
}

export default ContactForm