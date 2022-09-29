import React from 'react'
import './testimonials.css'
import AVTR1 from '../../essentials/avatar1.jpg'
import AVTR2 from '../../essentials/avatar2.jpg'
import AVTR3 from '../../essentials/avatar3.jpg'

const Testimonials = () => {
  return (
   <section>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <div className="container testimonials__container">
      <article className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="" />
            </div>
          <h5 className='client__name'>Don Files</h5>
          <small className="client__review">
            Well and organisational beviour suit with good 
            research and interest to the kind of service being offered as per the 
            clientel spesifications.Definately will comeback for a recharge
          </small>
      </article>
      <article className='testimonial'>
       <div className="client__avatar">
       <img src={AVTR2} alt="" />
        </div>
        <h5 className='client__name'>H@rtman Solutions</h5>
      <small className="client__review">
      Well and organisational beviour suit with good 
      research and interest to the kind of service being offered as per the 
      clientel spesifications.Definately will comeback for a recharge
       </small>
      </article>
      <article className='testimonial'>
       <div className="client__avatar">
       <img src={AVTR3} alt="" />
        </div>
        <h5 client__name>Cable Computing</h5>
       <small className="client__review">
      Well and organisational beviour suit with good 
     research and interest to the kind of service being offered as per the 
     clientel spesifications.Definately will comeback for a recharge
      </small>
      </article>
    </div>
   </section>
  )
}
export default Testimonials