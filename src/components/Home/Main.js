import { Link } from "react-router-dom";
import React from "react";
import Breadcrumb from "../HomeMain/Bredcrumb"
import Img from "../../assets/img/brand/outdoor.jpg";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import BGImg from "../../assets/img/slider/slider_bg.png";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";

const Main = () => {
  return (
    <>
    <Breadcrumb/>
      <main>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          
          backgroundColor:"#7fb8cb",
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
                    <h5 style={{color:"black"}}>"It 's not just Physical Therapy,</h5>
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
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
           
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                 
                  <h4>Serving the therapy needs of Northern Calvert/Southern Anne Arundel counties.</h4>
                  <p>
                    <h5>"It 's not just Physical Therapy,</h5>
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
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
           
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                 
                  <h4>Serving the therapy needs of Northern Calvert/Southern Anne Arundel counties.</h4>
                  <p>
                    <h5>"It 's not just Physical Therapy,</h5>
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
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
           
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                 
                  <h4>Serving the therapy needs of Northern Calvert/Southern Anne Arundel counties.</h4>
                  <p>
                    <h5>"It 's not just Physical Therapy,</h5>
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
      </main>
    </>
  );
};

export default Main;
