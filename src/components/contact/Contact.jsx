import React from 'react'
import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [input, setInput] = useState({
    fullname:'',
    email:'',
    message:'',
  });
  const handleChange = (event)=>{
    setInput({...input,[event.target.name]: event.target.input})
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className=" container contact__container">
        <div className="contact-options">
          <article className='contact__option'>
          <h4>Email</h4>
          <h5>dummyh@rtman@gmail.com</h5>
          <a href="dummyh@rtman@gmail.com" target="__blank">send a message</a>
          </article>
           <article className='contact__option'>
           <h4>Email</h4>
           <h5>Messager</h5>
          <a href="http://m.me/harman.muasa" target="__blank">send a message</a>
          </article>
          <article className='contact__option'>
          <h4>Whatsapp</h4>
          <h5>0701490476</h5>
          <a href="https:whatsapp.com/?0701490476" target="__blank">send a message</a>
          </article>
        </div>
        <form className='form-wrapper'>
          <input type="text" name='name' input={input.fullname} onChange={handleChange} placeholder='Your Full Name' required/>
          <input type="name" name='email' input={input.email} onChange={handleChange}placeholder='Email' required/>
          <textarea name="message" input={input.message} onChange={handleChange}id="" cols="30" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact