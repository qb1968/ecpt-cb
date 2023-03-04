import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/services-bg.png";
import React from "react";
import Icon1 from "../../assets/img/icon/fe-icon01.png";
import Icon2 from "../../assets/img/icon/fe-icon05.png";
import Icon3 from "../../assets/img/icon/fe-icon07.png";
import Icon4 from "../../assets/img/icon/fe-icon04.png";
import Icon5 from "../../assets/img/icon/fe-icon06.png";
import Icon6 from "../../assets/img/icon/fe-icon08.png";
import Img from "../../assets/img/features/services-img-details2.png";
import myImage from "../../assets/img/brand/modality.jpg"

const Service = () => {
  return (
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#7fb8cb",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-10">
            <div className="section-title center-align mb-50 text-center">
              <h5>Complimentary Screenings</h5>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Elite Care Physical Therapy at Chesapeake Beach offers free
                injury screenings. If you have been dealing with a nagging
                strain, sprain, general ache or pain, or any other general
                musculoskeletal condition you would like more information on, we
                can perform an assessment of your condition and provide you with
                recommendations for appropriate care. Screenings are completed
                by a licensed professional, however are not a substitute for a
                comprehensive evaluation or treatment.
              </p>
              <h5>Specializing in the treatment of:</h5>
              <p style={{ color: "black", fontWeight: "bold" }}>
                We offer a wide variety of therapy services and treat patients
                of all ages and backgrounds. We work with athletes of all ages
                and levels, work related injuries, motor vehicle accidents,
                post-surgical patients, fall risk/balance issues, and
                individuals looking to improve their functional
                performance/activities of daily living tolerance.
              </p>
            </div>
          </div>
          <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="slider-content s-slider-content mt-5">
         <ol style={{float:"left"}}>
          <h5 style={{textDecoration:"underline",color:"black"}}>Our Services Include</h5>
          <li>Cervical/Lumbar Traction</li>
            <li>Concussion Treatment</li>
            <li>Functional Exercise Programs</li>
            <li>Gait/Running Analysis</li>
            <li>Geriatric Rehab</li>
            <li>Individualized Treatment Programs</li>
            <li>Injury Prevention</li>
            <li>Manual Therapy</li>
            <li>Neuromusolar Re-Education</li>
            <li>Orthopedic Rehabilitation</li>
            <li>Pain Prevention</li>
            <li>Pre/Post Surgical Rehab Programs</li>
            <li>Spine Rehab</li>
            <li>Sports Medicine and Rehab</li>
            <li>Sport-Specific Training</li>
            <li>Total Joint Rehabilitation</li>
            <li>Wellness Programs</li>
         </ol>
         
         
                
         <ol style={{float:"right"}}>
          <h5 style={{textDecoration:"underline",color:"black"}}>Our Services Include</h5>
          <li style={{color:"black"}}>Cervical/Lumbar Traction</li>
            <li>Concussion Treatment</li>
            <li>Functional Exercise Programs</li>
            <li>Gait/Running Analysis</li>
            <li>Geriatric Rehab</li>
            <li>Individualized Treatment Programs</li>
            <li>Injury Prevention</li>
            <li>Manual Therapy</li>
            <li>Neuromusolar Re-Education</li>
            <li>Orthopedic Rehabilitation</li>
            <li>Pain Prevention</li>
            <li>Pre/Post Surgical Rehab Programs</li>
            <li>Spine Rehab</li>
            <li>Sports Medicine and Rehab</li>
            <li>Sport-Specific Training</li>
            <li>Total Joint Rehabilitation</li>
            <li>Wellness Programs</li>
         </ol>
          </div>
          </div>
          </div>
          </div>
         
         
        </div>
      </div>
       <div className="container" style={{marginTop:30,backgroundColor:"#007297"}}>
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-10">
            <div className="section-title center-align mb-50 text-center">
      <h5  >Modality Services Available</h5>
                <p  > <h5  >For a nominal charge during your treatment or after discharge we offer supervised modality application to assist with symptom resolution. No prescription is required, and services may be qualified expenses through your HSA card.</h5></p>
                <img class='mo' src={myImage} alt="moda"></img>
   
    </div>
    </div>
    </div>
    </div> </section>
  );
};

export default Service;
