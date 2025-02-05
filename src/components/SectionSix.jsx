import React from 'react'
import imageFourteen from "../assets/image-14.svg"

const SectionSix = () => {
  return (
    <div className="section">
        <div className="container">
            <div className='d-flex justify-content-center gap-2'>
                <div className="line"></div>
                <h1 className='heading-text no-dec'>Problem <span className='blue-txt'>Statement</span></h1>
                <div className="line"></div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                <h3 className='heading-text mt-3 no-dec text-decoration-underline'>Problem</h3>
                <ul style={{listStyleType: 'disc'}} className='mt-4'>
    <li><strong>Limited Tutor Options:</strong> Without a tutor-finding app, rural students may have fewer options when selecting a tutor with expertise in specific subjects or topics.</li>
    <li><strong>Travel Constraints:</strong> Traveling to urban areas for tutoring sessions can be time-consuming and expensive.</li>
    <li><strong>Lack of Reviews and Ratings:</strong> Without an app, students may lack access to reviews and ratings from previous students, making it challenging to assess a tutor’s quality.</li>
    <li><strong>Payment Disputes:</strong> Billing issues or disputes over fees can create tension between students and tutors, affecting the overall experience.</li>
    <li><strong>Subject Availability:</strong> In some cases, students may struggle to find tutors for niche areas in subjects or specialized areas of study.</li>
    <li><strong>Geographical Isolation:</strong> Rural communities are often spread out, making it difficult for students to find tutors within a reasonable distance for in-person sessions.</li>
    <li><strong>Language Barriers:</strong> Rural areas may have diverse linguistic backgrounds, which can create language barriers when accessing online tutoring platforms.</li>
    <li><strong>Difficulty in Homework Assistance:</strong> Rural students may struggle with homework and assignments, as there may not be readily available resources or tutors to help them.</li>
    <li><strong>Educational Inequality:</strong> The lack of access to educational resources, including tutor-finding apps, can contribute to educational inequality between rural and urban students.</li>
    <li><strong>Progress Tracker:</strong> Students' progress is not known during tuition.</li>
</ul>

                </div>
                <div className="col-lg-5">
                    <img src={imageFourteen} alt="" className='mt-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix