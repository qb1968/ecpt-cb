import React from "react"
import myImage from "../assets/modality.jpg"

const Services = () => {
    return(
   
        <div className="main1">
            <h1 class="cs1" >Complimentary Screenings </h1>
            <p className="comp"><h5 className="serv">Elite Care Physical Therapy at Chesapeake Beach offers free injury screenings. If you have been dealing with a nagging strain, sprain, general ache or pain, or any other general musculoskeletal condition you would like more information on, we can perform an assessment of your condition and provide you with recommendations for appropriate care. Screenings are completed by a licensed professional, however are not a substitute for a comprehensive evaluation or treatment.</h5></p>
            <div className="head1">
                <h1>Specializing in the treatment of:</h1>
            </div>
            <div className="pserv">
                <p className="eserv">
                    <h5 className="serv">We offer a wide variety of therapy services and treat patients of all ages and backgrounds. We work with athletes of all ages and levels, work related injuries, motor vehicle accidents, post-surgical patients, fall risk/balance issues, and individuals looking to improve their functional performance/activities of daily living tolerance.</h5>
                </p>
            </div>
            <div className="col">
            <div className="left">
                <h5 className="we">Our Services Include</h5>
             
            
            <ol style={{ listStyle: 'none' }}>
            
            <li>Cervical/Lumbar Traction</li>
            <li>Concussion Treatment</li>
            <li>Functional Exercise Programs</li>
            <li>Gait/Running Analysis</li>
            <li>Geriatric Rehab</li>
            <li>Individualized Treatment Programs</li>
            <li>Injury Prevention</li>
            <li>Manual Therapy</li>
            <li>Neuromuscular Re-Education</li>
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
            <div className="right">
                <h5 className="we1">We Specialize in Treating</h5>
             
            
            <ol style={{ listStyle: 'none' }}>
            <li>Acute and Chronic Pain</li>
            <li>Arthritis Pain/Discomfort</li>
            <li>Auto/Work Injuries</li>
            <li>Balance Disorders</li>
            <li>Carpal Tunnel</li>
            <li>Concussion Managment</li>
            <li>Fibromyalgia</li>
            <li>Foot & Ankle Pain</li>
            <li>General Orthopedics</li>
            <li>Jaw/Facial Pain-TMD</li>
            <li>Lower Back Pain</li>
            <li>Lower Extremity Pain</li>
            <li>Muscle and Joint Pain</li>
            <li>Musculoskeletal Disoreders</li>
            <li>Neck, Shoulder, and Arm Pain</li>
            <li>Neurologic Problems</li>
            <li>On-the-job Injuries</li>
            
            <li>Pre/Post Operative Cases</li>
            <li>Sports Injuries</li>
            <li>Stiffness & Weakness</li>
            <li>Vestibular/Balance Disorders</li>
            
            </ol>
            </div>
            </div> 
            <div className="modality">
                <h1 class="mod" >Modality Services Available</h1>
                <p  className="m1"> <h5 className="m2" >For a nominal charge during your treatment or after discharge we offer supervised modality application to assist with symptom resolution. No prescription is required, and services may be qualified expenses through your HSA card.</h5></p>
                <img class='mo' src={myImage} alt="moda"></img>
            </div>
           
        </div>
         
            
            
        
    )
}

export default Services