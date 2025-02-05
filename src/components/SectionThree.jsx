import React from "react";
import imageFour from "../assets/image-4.svg";
import imageFive from "../assets/image-5.svg";
import imageSix from "../assets/image-6.svg";
import imageSeven from "../assets/image-7.svg";
import imageEight from "../assets/image-8.svg";
import imageNine from "../assets/image-9.svg";
import imageTen from "../assets/image-10.svg";
import imageEleven from "../assets/image-11.svg";
import imageTwelve from "../assets/image-12.svg";
const SectionThree = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="heading-text">My Role</h3>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img src={imageFour} alt="Image 4"  className="mb-2"/>
                <p>Research</p>
              </div>
              <div className="col-lg-4">
                <img src={imageFive} alt="Image 5"  className="mb-2"/>
                <p>Interview</p>
              </div>
              <div className="col-lg-4">
                <img src={imageSix} alt="Image 6"  className="mb-2"/>
                <p>User persona</p>
              </div>
              <div className="col-lg-4">
                <img src={imageSeven} alt="Image 7"  className="mb-2"/>
                <p>User Flow</p>
              </div>
              <div className="col-lg-4">
                <img src={imageEight} alt="Image 8"  className="mb-2"/>
                <p>Wireframe</p>
              </div>
              <div className="col-lg-4">
                <img src={imageNine} alt="Image 9"  className="mb-2"/>
                <p>Design</p>
              </div>
              <div className="col-lg-4">
                <img src={imageTen} alt="Image 10"  className="mb-2"/>
                <p>UI/UX Design</p>
              </div>
              <div className="col-lg-4">
                <img src={imageEleven} alt="Image 11"  className="mb-2"/>
                <p>Usability testing</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="heading-text text-center">Accessories</h3>
            <div className="mt-5 text-center">
                <img src={imageTwelve} alt="" />
                <div className="d-flex justify-content-center gap-5 mt-3">
                    <div>
                        <h4 className="stats">30+</h4>
                        <p className="mini-text">Screens</p>
                    </div>
                    <div>
                        <h4 className="stats">05+</h4>
                        <p className="mini-text">Interviews</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
