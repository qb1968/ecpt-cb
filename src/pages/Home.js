import React from "react"
import myImage from '../assets/outdoor.jpg'
import myImage1 from '../assets/ches-beach.jpg'
import myImage2 from '../assets/front-desk.jpg'
import myImage3 from '../assets/room-1.jpg'
import myImage4 from '../assets/room-2.jpg'

const Home = () => {
    return(
        
        <div className="main">
            
        <div className="head">
            <h2>Serving the therapy needs of Northern Calvert/Southern Anne Arundel counties.</h2>
            
        </div>
        <div className="p1">    
            <p className="elite">
                <h5  className="special" >"It 's not just Physical Therapy, </h5>
                <h5 className="special1" >it 's Elite Care"</h5>
                <h5 >Elite Care Physical Therapy at Chesapeake Beach was founded in 2017 and serves the Anne Arundel/Calvert County area. Winner of multiple patient-nominated awards for best Physical Therapy office in Calvert County 3 years in a row, we treat a variety of orthopedic and neurological conditions. We invite you to see what makes our office unique. </h5>
                
            </p>
             <img class="sign" src={myImage} alt="Logo"></img>
        </div>
        <div className="head2">
            <h2>Alleviate pain without surgery</h2>
        </div>
        <div className="p1">    
            <p className="elite1">
                <h5 > Physical Therapy is highly effective at decreasing pain and improving function/quality of life. There is an increasing emphasis on being active through all phases of life. Physical Therapy is the most conservative treatment available without the unwanted side effects of medications or having to deal with recovery from surgery.</h5>
           
            </p>
             <img style={{ width: 255, height: 250 }} class="outdoor" src={myImage1} alt=""></img>
        </div>
        <div className="head2">
            <h2>Complimentary Screening</h2>
        </div>
        <div className="p1">    
            <p className="elite1">
                <h5> Recent injury? Have a general therapy question or need advice on stretching? Our staff is happy to provide advice and get you moving in the right direction, whether you are a couch potato who wants to start exercising, a weekend warrior, or a high-level athlete.</h5>
           
            </p>
             <img style={{ width: 250, height: 250 }} class="outdoor" src={myImage2} alt=""></img>
        </div>
        <div className="head2">
            <h2>One-on-One Therapy</h2>
        </div>
        <div className="p1">    
            <p className="elite1">
                <h5> While at your appointment you will receive an individualized evaluation and treatment geared towards your specific condition and goals. We welcome you to visit our patient centered award winning office and see for yourself what sets us apart from your prior physical therapy experiences.</h5>
           
            </p>
             <img style={{ width: 250, height: 250 }} class="outdoor" src={myImage3} alt=""></img>
        </div>
        {/* <div className="head">
            <h2>Certified Kinesio Taping Practitioner</h2>
        </div>
        <div className="p1">    
            <p className="elite1">
                <h5>Kinesio Taping is a rehabilitative taping technique that is designed to facilitate the body’s natural healing process while providing support and stability to muscles and joints without restricting the body’s range of motion.</h5>
           
            </p>
             <img style={{ width: 255, height: 250,padding:10 }} classname="outdoor" src={myImage4} alt=""></img>
        </div> */}
        </div>
       
    )
}

export default Home