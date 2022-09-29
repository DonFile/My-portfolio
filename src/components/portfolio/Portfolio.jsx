import React from 'react'
import './portfolio.css'
import IMG1 from '../../essentials/portfolio1.png'
import IMG2 from '../../essentials/portfolio2.jpg'
import IMG3 from '../../essentials/portfolio3.png'
import IMG4 from '../../essentials/portfolio4.png'
import IMG5 from '../../essentials/portfolio5.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://twitter.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG2} alt="" />
           </div>
           <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='__blank'>Github</a>
           <a href="https://twitter.com" className='btn btn-primary' target='__blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://twitter.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://twitter.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG5} alt="" />
           </div>
           <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='__blank'>Github</a>
          <a href="https://twitter.com" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Portfolio