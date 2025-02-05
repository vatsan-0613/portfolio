import React from "react";
import chartOne from "../assets/charts/image 17.svg";
import chartTwo from "../assets/charts/image 18.svg";
import chartThree from "../assets/charts/image 19.svg";
import chartFour from "../assets/charts/image 20.svg";
import chartFive from "../assets/charts/image 21.svg";
import chartSix from "../assets/charts/image 22.svg";
import chartSeven from "../assets/charts/image 23.svg";
import chartEight from "../assets/charts/image 24.svg";
import chartNine from "../assets/charts/image 25.svg";
import chartTen from "../assets/charts/image 26.svg";
import chartEleven from "../assets/student/image 28.svg";
import chartTwelve from "../assets/student/image 29.svg";
import chartThirteen from "../assets/student/image 30.svg";
import chartFourteen from "../assets/student/image 31.svg";
import chartFifteen from "../assets/student/image 32.svg";
import chartSixteen from "../assets/student/image 33.svg";
import chartSeventeen from "../assets/student/image 34.svg";
import chartEighteen from "../assets/student/image 35.svg";
import chartNineteen from "../assets/student/image 36.svg";
import chartTwenty from "../assets/student/image 37.svg";

const SectionTen = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="d-flex justify-content-center gap-2">
          <div className="line"></div>
          <h1 className="heading-text no-dec">
            Responses of Qualitative <br />
            <span className="blue-txt">& Quantitative Analysis</span>
          </h1>
          <div className="line"></div>
        </div>
        <h3 className="heading-text no-dec my-5">
          <span className="blue-txt">01</span> Teacher
        </h3>
        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={chartOne} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartTwo} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartThree} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartFour} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartFive} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartSix} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartSeven} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartEight} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartNine} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartTen} alt="" className="chart-img" />
          </div>
        </div>
        <h3 className="heading-text no-dec my-5">
          <span className="blue-txt">01</span> Student
        </h3>
        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={chartEleven} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartTwelve} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartThirteen} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartFourteen} alt="" className="chart-img" />
          </div>
          <div className="col-lg-6">
            <img src={chartFifteen} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartSixteen} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartSeventeen} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartEighteen} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartNineteen} alt=""  className="chart-img"/>
          </div>
          <div className="col-lg-6">
            <img src={chartTwenty} alt=""  className="chart-img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTen;
