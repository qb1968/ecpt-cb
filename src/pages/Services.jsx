import React from "react"
import myImage from "../assets/modality.jpg"

const Services = () => {
    return(
    <>
        <div className="main1">
            <h1>Complimentary Screenings Available</h1>
            <p className="comp"><h5>Elite Care Physical Therapy offers free injury screenings. If you have been dealing with a strain, sprain, ache or pain, haven’t made it to the doctor yet and would like more information about your injury, we can perform an assessment and provide you with suggestions or recommendations for future care and answer any questions you may have. Screenings are completed by a licensed provider or certified athletic trainer.
*Screenings are not a complete evaluation or physical therapy treatment.</h5></p>
            <div className="head1">
                <h1>Services</h1>
            </div>
            <div className="pserv">
                <p className="eserv">
                    <h5>Elite Care Physical Therapy offers a variety of therapy services to treat patients of all ages, backgrounds and interests. Our team has a wide range of experience treating professional and recreational athletes as well as injuries from work, auto accidents and surgery.</h5>
                </p>
            </div>
            <div>
            <div className="left">
                <h5 className="we">Our Services Include</h5>
             
            
            <ol style={{ listStyle: 'none' }}>
            <li>Athletic Training Services</li>
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
            <li>Pediatric Rehab</li>
            <li>Pre/Post Operative Cases</li>
            <li>Sports Injuries</li>
            <li>Stiffness & Weakness</li>
            <li>Vestibular/Balance Disorders</li>
            <li>Women’s Wellness</li>
            </ol>
            </div>
            </div> 
            <div className="modality">
                <h1>Modality Services Available</h1>
                <img class='mo' src={myImage} alt="moda"></img>
            </div>
           
        </div>
         
            
            
        </>
    )
}

export default Services