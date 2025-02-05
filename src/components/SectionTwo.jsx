import React from 'react'
import imageThree from "../assets/image-3.svg"

export const SectionTwo = () => {
  return (
    <div className='section'>
        <div className="container">
        <div className="heading d-flex align-items-end">
            <img src={imageThree} alt="" />
            <h1 className='hanuman green big-text'>Bodhi</h1>
        </div>
        <div>
        <p className='hanuman green small-text mt-3'>“Ignite learning Ignite success”</p>
        </div>
        <div className='my-5'>
        <a href="" className='poppins green-button'>UiUX  case study</a>
        </div>
        <div className='small-container'>
            <p>Unleash your full learning potential with Bodhi,  where the
pursuit of knowledge meets effortless discovery. Say
goodbye to the search struggle and hello to tailored, top-
notch tutoring, right at your fingertips. Welcome to a 
smarter way to excel academically.</p>
        </div>
        </div>
    </div>
  )
}
