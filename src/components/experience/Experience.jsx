import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className=" cotaniner experience__container">
            <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <article className='experience__details'>
              <div>
              <h4>HTML</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <div>
              <h4>CSS</h4>
              </div>
              <small className='text-light'>Intemediate</small>
            </article>
            <article className='experience__details'>
              <div>
              <h4>JAVASCRIPT</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <div>
              <h4>BOOTSTRAP</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <div>
              <h4>REACT</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        <div className="experience__backend">
           <h3>Backend Development</h3>
 <article className='experience__details'>
  <div>
   <h4>MONGO DB</h4>
   </div>
   <small className='text-light'>Immediate</small>
 </article>
 <article className='experience__details'>
  <div>
   <h4>PHP</h4>
   <small className='text-light'>Immediate</small>
  </div>
 </article>
 <article className='experience__details'>
  <div>
   <h4>NODE JS</h4>
  </div>
   <small className='text-light'>Interimmediate</small>
 </article>
 <article className='experience__details'>
  <div>
   <h4>MySQL</h4>
   <small className='text-light'>Immediate</small>
  </div>
 </article>
 <article className='experience__details'>
  <div>
   <h4>Express</h4>
  </div>
   <small className='text-light'>Basic</small>
 </article>
 </div>
 </div>
    </section>
  )
}
export default Experience