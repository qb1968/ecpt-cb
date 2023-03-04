import Slider from "react-slick";
import { Link } from "react-router-dom";
import React from "react";
import BGImg4 from "../../assets/img/bg/product-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/img/shop/img1.jpg";
import Img2 from "../../assets/img/shop/img2.jpg";
import Img3 from "../../assets/img/shop/img3.jpg";
import Img4 from "../../assets/img/shop/img4.jpg";
import Img5 from "../../assets/img/shop/img5.jpg";
import Img6 from "../../assets/img/shop/img6.jpg";
import Bredcrumb from "./Bredcrumb"




const Product = () => {
  

  return (
    <>
     <Bredcrumb/>
      
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
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h4>Products</h4>
                </div>
                <p style={{color:"black"}}>
                  As part of your treatment, we may recommend certain products to optimize your progress and outcome. If we do not stock the items you need, we will gladly assist you with obtaining it. Feel free to contact our office with any questions.
                </p>
                <ol>
                  <li><a href="https://biofreeze.com">Biofreeze</a></li>
                    <li><a href="https://rocktape.com"> Rock Tape/Kinesiology tape</a></li>
                    <li><a href="https://theraband.com">Theraband/Resistive bands</a></li>
                    <li> Patellar Taping (Cover roll and Leukotape)</li>
                    <li><a href="https://www.amazon.com/s?k=adjust-a-lift+heel+lifts&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzbSYT5YPAOt2RsnbBupqIZ_eg33W7okhQJFSwAOqk2zuHdagY8AMoxoCkkkQAvD_BwE&hvadid=616990580093&hvdev=c&hvlocphy=9009597&hvnetw=g&hvqmt=e&hvrand=15787204331905569899&hvtargid=kwd-18131088190&hydadcr=21881_13401770&tag=googhydr-20&ref=pd_sl_2ii2yq8b3b_e"> Adjust a lift heel lift</a></li>
                    <li><a href="https://www.amazon.com/swiss-ball/s?k=swiss+ball">Swiss ball</a></li>
                    <li><a href="https://www.amazon.com/s?k=balance+pad&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzYC_-20KIe1OSrm7c_fKW9IXwaewJELyROsM7uNyip5oL9NL-hwuDRoCtOoQAvD_BwE&hvadid=616931741710&hvdev=c&hvlocphy=9009597&hvnetw=g&hvqmt=e&hvrand=12501838831894579576&hvtargid=kwd-550778926&hydadcr=24664_13611849&tag=googhydr-20&ref=pd_sl_84jpjnin4r_e">Balance pad</a></li>
                    <li><a href="https://www.amazon.com/s?k=foam+rollers&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzS7P5e1nSRaNL6gswNSlYCZzNmCsYEsfZ-nVqwuYB9h_Vaw9JnSt2RoCl58QAvD_BwE&hvadid=616863325596&hvdev=c&hvlocphy=9009597&hvnetw=g&hvqmt=e&hvrand=15863259054539625698&hvtargid=kwd-3076487861&hydadcr=24663_13611861&tag=googhydr-20&ref=pd_sl_6wvh7f2li5_e">Foam Roller</a></li>
                    <li><a href="https://www.amazon.com/s?k=myofascial+roller+stick&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzTdAIFxtHslLZHboLpj2zWYDx4bXOURw-kBRyFO19qn9fxS3bXvB_xoCCOAQAvD_BwE&hvadid=410041641730&hvdev=c&hvlocphy=9009597&hvnetw=g&hvqmt=e&hvrand=2239057692786930133&hvtargid=kwd-101772196598&hydadcr=21880_11241936&tag=googhydr-20&ref=pd_sl_7f3rqg2wvi_e">Myofascial roller/wand</a></li>
                    <li><a href="https://www.amazon.com/s?k=shoulder+pulley+rehab&gclid=CjwKCAiA2fmdBhBpEiwA4CcHzbQ8nDB2HuczUKwD8I18zzz8ePeslSw4blpk3wFg9LEHZqRXy9IUZBoCg9QQAvD_BwE&hvadid=616990655279&hvdev=c&hvlocphy=9009597&hvnetw=g&hvqmt=e&hvrand=16951385126257566692&hvtargid=kwd-50569691911&hydadcr=21878_13401755&tag=googhydr-20&ref=pd_sl_68kbszn895_e">Shoulder pulley system</a></li>
                    <li><a href="https://www.amazon.com/e-stim-machine/s?k=e-stim+machine"> Home e-stim units (EMSI)</a></li>
                </ol>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Product;
