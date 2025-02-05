import React from 'react'
import imageFifteen from "../assets/image-15.svg"

const SectionSeven = () => {
  return (
    <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <h3 className='heading-text mt-3 no-dec text-decoration-underline'>Possible Solution</h3>
                    <ul className='mt-5'>
    <li className='green-bullet'>Creating a convenient digital platform for finding tuition.</li>
    <li className='green-bullet'>Integrating a progress tracker into my app which facilitates better communication between students and tutors, and provides a structured approach to tracking educational progress.</li>
    <li className='green-bullet'>Offer support for local languages and dialects within the app to make it accessible to students who may not be proficient in the national language.</li>
    <li className='green-bullet'>Develop offline resource libraries within the app, including educational materials, practice tests, and study guides, that rural students can access without an internet connection.</li>
    <li className='green-bullet'>Integrating a payment tracker into my app which facilitates sending notifications for upcoming payments, making it convenient for users to manage their financial commitments.</li>
    <li className='green-bullet'>To get an instant solution to any problem by talking to the teacher through message, voice, or video call.</li>
    <li className='green-bullet'>Implement an offline mode in the app, allowing students to download educational resources, practice tests, and study guides and access them offline in remote areas.</li>
    <li className='green-bullet'>Optimize the app to function efficiently on low-bandwidth connections, ensuring that rural students can use it even with limited internet speeds.</li>
    <li className='green-bullet'>To find nearby teachers easily.</li>
    <li className='green-bullet'>To get to know about the teaching style of the tutor by providing a demo class to students.</li>
</ul>

    
                    </div>
                    <div className="col-lg-5">
                        <img src={imageFifteen} alt="" className='mt-5'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SectionSeven