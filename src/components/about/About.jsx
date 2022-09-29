import React from 'react'
import './about.css'
import Me from '../../essentials/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>6+ months working experience</small>
            </article>
            <article className='about__card'>
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>
            <article className='about__card'>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>For reasonable and professional Web development,
             please feel free to engage us as we look forward to making your vision a reality
              and set standards required for the type of work you want</p>
              <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About