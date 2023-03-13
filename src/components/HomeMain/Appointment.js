import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";

const Appointment = () => {
  return (
    <>
      <section
        id="booking"
        className="booking-area p-relative pt-120 pb-120"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor:"#7fb8cd",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg">
                <div className="section-title center-align">
                  <h5>Get In Touch</h5>
                  <h2>Have a Question</h2>
                  <p>
                    Feel free to fill out your info and submit your question. Someone will get back to you with the information you request.
                  </p>
                </div>
                <form
                  action="https://submit-form.com/fQxBBGr1"
                  method="post"
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="First Name"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="Last Name"
                          name="lastn"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="Email"
                          placeholder="Eamil"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                       <input
                         type="text"
                         id="phone"
                         name="Phone Number"
                         placeholder="Phone Number"
                         required
                         />
                      </div>
                    </div>
                   
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="Message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write comments"
                        ></textarea>
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="opening-time">
                <div className="open-img">
                  
                </div>
                <h3>Opening Hours</h3>
                <div className="text">
                  <div className="left-text">Monday: </div>
                  <div className="right-text">8:00 am – 5:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Tuesday:</div>
                  <div className="right-text">8:00 am – 12:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Wednesday:</div>
                  <div className="right-text">8:00 am – 5:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Thursday:</div>
                  <div className="right-text">8:00 am – 5:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Friday:</div>
                  <div className="right-text">CLOSED</div>
                </div>
                <h4>Phone:</h4> <span>443 646 5514</span>
                <h4>Fax: </h4><span>410 834 5504</span>
                <h4>Email: </h4><span>beach@ecpt-cb.com</span>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
