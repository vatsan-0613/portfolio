import React from 'react'
import imageOne from "../assets/image-2.svg"
import imageTwo from "../assets/image-1.svg"

const SectionOne = () => {
  return (
    <div className="section mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h1 className='hanuman green big-text'>Bodhi</h1>
                        <p className='hanuman green small-text'>“Ignite learning Ignite success”</p>
                        <a href="" className='poppins green-button'>UiUX  case study</a>
                    </div>
                    <div className='mt-5'>
                        <img src={imageOne} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={imageTwo} alt="" className='image-two'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne