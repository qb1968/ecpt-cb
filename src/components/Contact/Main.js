import React from "react";
import Appointment from "../HomeMain/Appointment";
import { Link } from "react-router-dom";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Contact Us" subtitle="Contact Us" />
      <Appointment />

      <div className="map fix" style={{ background: "#F5F5F5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12455.435005726593!2d-76.5329344!3d38.69808869999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7861ba6676161%3A0xa9870320cce6d47f!2sElite%20Care%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1677988578419!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="600"
                height="450"
                style={{ border: "0" ,color:"black"}}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
