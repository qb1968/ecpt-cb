import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/brand/charlie.jpg";
import Breadcrumb from "../HomeMain/Bredcrumb"
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <>
      
      <section
        className="about-area about-p pt-140 pb-140 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor:"#7fb8cb",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h4>Charles Sclater, MPT, GTS</h4>
                </div>
                <p style={{color:"black"}}>
                  Charlie graduated from the University of Maryland Eastern
                  Shore with his Masters in Physical Therapy Degree in 1997.
                  Since then he has been a practicing physical therapist in 3
                  states and multiple settings including acute care, skilled
                  nursing, rehabilitation centers, and his favorite, out-patient
                  orthopedics. He has taken extensive continuing education
                  courses in conservative and post-surgical shoulder
                  rehabilitation, knee joint and ACL injury rehabilitation, and
                  evaluation and treatment of temporo-mandibular dysfunction.
                  Charlie opened and was the sole owner of Bayview Physical
                  Therapy in Chesapeake Beach from 2011-2014. He recently joined
                  Elite Care Physical Therapy in 2017. When not at the office
                  Charlie enjoys spending time with his family boating, jet
                  skiing, and skiing. An avid soccer coach he enjoys spending
                  time working with kids from 5-18 teaching them the game he has
                  come to love.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <img
                  src={Img}
                  alt="img"
                  style={{ width: 300, height: 350 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial/>
    </>
  );
};

export default About;
