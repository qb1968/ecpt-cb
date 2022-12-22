import React from "react"
import myImage from '../assets/outdoor.jpg'
import myImage1 from '../assets/ches-beach.jpg'
import myImage2 from '../assets/front-desk.jpg'
import myImage3 from '../assets/room-1.jpg'
import myImage4 from '../assets/room-2.jpg'

const Home = () => {
    return(
        <>
        <div className="main">
        <div className="head">
            <h2>Physical Therapy in Calvert County</h2>
        </div>
        <div className="p1">    
            <p className="elite">
                <h5>Elite Care Physical Therapy was founded in 2014 and is the premiere facility in Chesapeake Beach Maryland we offer a variety of therapeutic services such as orthopedic and joint replacement rehabilitation, post surgical and neurological care, sports medicine, work and auto injuries as well as other injuries not listed.</h5>
           
            </p>
             <img class="sign" src={myImage} alt="Logo"></img>
        </div>
        <div className="head">
            <h2>Fight back pain without surgery</h2>
        </div>
        <div className="p1">    
            <p className="elite">
                <h5>Physical Therapy can Help!
You have a life and you deserve to do all the things you enjoy. So no matter if you are coming in for chronic back pain or therapy to recover from a single surgery, we are here to help you make the best of your life and your body.</h5>
           
            </p>
             <img style={{ width: 255, height: 250,padding:10 }} classname="outdoor" src={myImage1} alt=""></img>
        </div>
        <div className="head">
            <h2>Free injury screenings</h2>
        </div>
        <div className="p1">    
            <p className="elite">
                <h5>Has your child had a sports injury?
Regardless of the type or location of your injury, Elite Care Physical Therapy’s Certified Athletic Trainer has the knowledge and expertise to help athletes get back to the sport they love!</h5>
           
            </p>
             <img style={{ width: 250, height: 250,padding:10 }} classname="outdoor" src={myImage2} alt=""></img>
        </div>
        <div className="head">
            <h2>One-on-One Therapy for Every Patient</h2>
        </div>
        <div className="p1">    
            <p className="elite">
                <h5>All of our therapists believe in a holistic approach to healing and strengthening your body by creating an individualized plan of care for each patient catering to their goals, because you deserve a therapist that understands your needs.</h5>
           
            </p>
             <img style={{ width: 250, height: 250,padding:10 }} classname="outdoor" src={myImage3} alt=""></img>
        </div>
        <div className="head">
            <h2>Certified Kinesio Taping Practitioner</h2>
        </div>
        <div className="p1">    
            <p className="elite">
                <h5>Kinesio Taping is a rehabilitative taping technique that is designed to facilitate the body’s natural healing process while providing support and stability to muscles and joints without restricting the body’s range of motion.</h5>
           
            </p>
             <img style={{ width: 255, height: 250,padding:10 }} classname="outdoor" src={myImage4} alt=""></img>
        </div>
        </div>
        </>
    )
}

export default Home