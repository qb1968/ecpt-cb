import { Link } from "react-router-dom";
import React from "react";
import BGIMG from "../../assets/img/bg/bdrc-bg.png";
import IMG from "../../assets/img/brand/ecptlogo.jpg"
import IMG2 from "../../assets/img/brand/award.jpg"

const Bredcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="breadcrumb-area d-flex align-items-center" style={{backgroundColor:"#007297"}}
        
      >
        <div className="container" style={{marginTop: '100px',marginBottom:'20px'}}>
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <img src={IMG} style={{ width: "60%" }} />
                <img src={IMG2} style={{width:"39.3%"}} />
                    
                  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bredcrumb;
