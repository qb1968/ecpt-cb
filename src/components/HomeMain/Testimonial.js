import BGImg7 from "../../assets/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import Img1 from "../../assets/img/testimonial/testi_avatar.png";
import Img2 from "../../assets/img/testimonial/testi_avatar_02.png";
import Icon from "../../assets/img/testimonial/qt-icon.png";

const Testimonial = () => {
  const testimonial = {
    initialIndex: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="testimonial-area pt-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor:"#007297",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Testimonial</h5>
                <h2>What Our Clients Says</h2>
                <p className="mt-15">
                We pride ourselves on our patient feedback and once again welcome you to see what makes us unique and separates us from other physical therapy experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                <div className="single-testimonial">
                  <div className="testi-author">
                   
                    <div className="ta-info">
                      <h6>PW</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <h5>I Give Them 5 stars</h5>
                  <p>
                    “I have graduated Early from PT because of Charlie and his team!”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    
                    <div className="ta-info">
                      <h6>HC</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Thank you for helping me get back on my feet so quickly. You know what to do”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    
                    <div className="ta-info">
                      <h6>MC</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “I have been to several physical therapy places. This one is by far the best. They give you the therapy you need”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    
                    <div className="ta-info">
                      <h6>PS</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Just finished my therapy and I am much improved. The staff is friendly, helpful, and very capable. Highly recommend”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    
                    <div className="ta-info">
                      <h6>KM</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Three months after starting PT I have full use of my dominant arm back. Personal care and attention are given to each patient”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
