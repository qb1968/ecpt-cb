import { Link } from "react-router-dom";
import React from "react";
import Breadcrumb from "../HomeMain/Bredcrumb"
import Img from "../../assets/img/brand/outdoor.jpg";
import Img1 from "../../assets/img/brand/office.jpg";
import Img2 from "../../assets/img/brand/office.jpg";
import Img3 from "../../assets/img/brand/front-desk.jpg";
import Img4 from "../../assets/img/brand/room-1.jpg";
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
      <Breadcrumb />
      <main>
        <section
          className="about-area about-p pt-120 pb-120 p-relative fix"
          style={{
            backgroundColor: "#7fb8cb",
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center" >
              <div className="col-lg-6 col-md-12 col-sm-12" >
                <div
                  className="about-content s-about-content  wow fadeInRight  animated"
                  data-animation="fadeInRight"
                  data-delay=".4s"
                >
                  <div className="about-title second-title pb-25">
                    <h4>
                      Serving the therapy needs of Northern Calvert/Southern
                      Anne Arundel counties.
                    </h4>
                    <p>
                      <h5>"It 's not just Physical Therapy,</h5>
                      <h5>it 's Elite Care"</h5>
                    </p>
                  </div>
                  <p style={{ color: "black" }}>
                    Elite Care Physical Therapy at Chesapeake Beach was founded
                    in 2017 and serves the Anne Arundel/Calvert County area.
                    Winner of multiple patient-nominated awards for best
                    Physical Therapy office in Calvert County 3 years in a row,
                    we treat a variety of orthopedic and neurological
                    conditions. We invite you to see what makes our office
                    unique.
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
                    style={{ width: 350, height: 300, marginLeft: "10px" }}
                  />
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
            backgroundColor: "#007297",
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
                    <h4>Alleviate pain without surgery</h4>
                  </div>
                  <p style={{ color: "black" }}>
                    Physical Therapy is highly effective at decreasing pain and
                    improving function/quality of life. There is an increasing
                    emphasis on being active through all phases of life.
                    Physical Therapy is the most conservative treatment
                    available without the unwanted side effects of medications
                    or having to deal with recovery from surgery.
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
                    src={Img1}
                    alt="img"
                    style={{ width: 350, height: 300, marginLeft: "10px" }}
                  />
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
            backgroundColor: "#7fb8cb",
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
                    <h4>Complimentary Screening</h4>
                  </div>
                  <p style={{ color: "black" }}>
                    Recent injury? Have a general therapy question or need
                    advice on stretching? Our staff is happy to provide advice
                    and get you moving in the right direction, whether you are a
                    couch potato who wants to start exercising, a weekend
                    warrior, or a high-level athlete.
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
                    src={Img3}
                    alt="img"
                    style={{ width: 350, height: 300, marginLeft: "10px" }}
                  />
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
            backgroundColor: "#007297",
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
                    <h4>One-on-One Therapy</h4>
                  </div>
                  <p style={{ color: "black" }}>
                    While at your appointment you will receive an individualized
                    evaluation and treatment geared towards your specific
                    condition and goals. We welcome you to visit our patient
                    centered award winning office and see for yourself what sets
                    us apart from your prior physical therapy experiences.
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
                    src={Img4}
                    alt="img"
                    style={{ width: 350, height: 300, marginLeft: "10px" }}
                  />
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
