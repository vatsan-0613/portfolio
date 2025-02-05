import React from 'react'
import imageTwentyOne from '../assets/image-21.png'

const SectionNine = () => {
  return (
    <div className="section">
            <div className="container">
                <div className='d-flex justify-content-center gap-2'>
                    <div className="line"></div>
                    <h1 className='heading-text no-dec'>Project <span className='blue-txt'>Timeline</span></h1>
                    <div className="line"></div>
                </div>
                <div className='mt-4'>
                    <img src={imageTwentyOne} alt="" />
                </div>
            </div>
        </div>
  )
}

export default SectionNine