import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img from "../../../assets/img/bg/quote_bg.png";
import BlogSidebar from "../../HomeMain/BlogSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PDF from "../../../assets/img/pdf/notice-of-privacy.pdf"
import PDF1 from "../../../assets/img/pdf/Medical-History-Form.pdf"
import PDF2 from "../../../assets/img/pdf/Back Index.pdf"
import PDF3 from "../../../assets/img/pdf/Neck.pdf"
import PDF4 from "../../../assets/img/pdf/Upper.pdf"
import PDF5 from "../../../assets/img/pdf/Lower.pdf"
import PDF6 from "../../../assets/img/pdf/JFLS-8.pdf"



const Main = () => {
  
  return (
    <>
      <Bredcrumb  />
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
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>Please bring the following items to your first appointment</h5>
              <ol style={{listStyleType: 'decimal'}}>
              <li >Drivers License or Photo ID</li>
                    <li>Insurance Info</li>
                    <li>Physical Therapy Prescription or Referral (if required by your insurance, please contact us if you have questions).</li>
                    <li>New Patient Paperwork; see list below</li>
                    <li>List of current medications, vitamins, and other supplements.</li>
                    <li>Comfortable clothing to wear for exam; we suggest shorts/exercise pants, sneakers, t-shirt.</li>
              </ol>
              <h5>Please print, fill out, and bring in the following forms that pertain to your injury to your first appointment.</h5>
             <div>
              <ol style={{fontStyle:"italic"}}>Back Injury
              <li><a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a></li>
                <li><a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a></li>
                <li><a href = {PDF2} target = "_blank">Back Index Form</a></li>
                </ol>
             </div>
             <div>
              <ol style={{fontStyle:"italic"}}>Neck Injury
              <li><a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a></li>
                <li><a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a></li>
                <li><a href = {PDF3} target = "_blank">Neck Index Form</a></li>
                </ol>
             </div>
             <div>
              <ol style={{fontStyle:"italic"}}>Upper and Lower Extremities
              <li><a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a></li>
                <li><a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a></li>
                <li><a href = {PDF4} target = "_blank">Upper Extremity Form</a></li>
                <li><a href = {PDF5} target = "_blank">Lower Extremity Form</a></li>
                </ol>
             </div>
             <div>
              <ol style={{fontStyle:"italic"}}>Upper and Lower Extremities
              <li><a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a></li>
                <li><a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a></li>
                <li><a href = {PDF6} target = "_blank">Jaw Functional Limitation Scale - 8</a></li>
                
                </ol>
             </div>
            
            </div>
          </div>
          
         
         
        </div>
      </div>
       
    </section>
    </>
  );
};

export default Main;
