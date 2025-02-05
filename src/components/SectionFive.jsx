import React from 'react'
import imageThirteen from "../assets/image-13.svg"

const SectionFive = () => {
  return (
    <div className="section">
        <div className="container">
            <div className='d-flex justify-content-center gap-2'>
                <div className="line"></div>
                <h1 className='heading-text'>Project <span className='blue-txt'>Overview</span></h1>
                <div className="line"></div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <h3 className='heading-text mt-3 no-dec text-decoration-underline'>Overview</h3>
                    <p className='mini-text ms-5 mt-5'>
                    Finding tutor is a very common problem in our country. Students are
struggling to get tutor who can accommodate the student’s schedule
and finding a tutor with expertise in a specific subject or topic, 
especially rural areas, can be challenging. Also handling payments
securely and reliably can be a concern for both students and tutors.
Along with this we have found out many problems related to tuition
and tried to solve them through an app called “Bodhi” . With this app, 
anyone can find good tutors and get quality education in their nearby
location and find solutions to many tuition related problems. we have
tried to present the complete case study of the User Experience and 
User Interface design of the app here. 
                    </p>
                </div>
                <div className="col-lg-5">
                    <img src={imageThirteen} alt="" className='mt-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive