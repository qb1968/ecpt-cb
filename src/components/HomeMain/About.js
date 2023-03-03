import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/brand/outdoor.jpg";

const About = () => {
  return (
    <>
      <section
        className="about-area about-p pt-140 pb-140 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
           
            <div className="col-lg-6 col-md-12 col-sm-12" >
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                 
                  <h4>Serving the therapy needs of Northern Calvert/Southern Anne Arundel counties.</h4>
                  <p>
                    <h5 style={{color:"blue"}}>"It 's not just Physical Therapy,</h5>,
                    <h5>it 's Elite Care"</h5>
                  </p>
                </div>
                <p>
                Elite Care Physical Therapy at Chesapeake Beach was founded in 2017 and serves the Anne Arundel/Calvert County area. Winner of multiple patient-nominated awards for best Physical Therapy office in Calvert County 3 years in a row, we treat a variety of orthopedic and neurological conditions. We invite you to see what makes our office unique. 
                </p>
                
                
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <img src={Img} alt="img" style={{width:250,height:250,marginLeft:"105px"}}/>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
