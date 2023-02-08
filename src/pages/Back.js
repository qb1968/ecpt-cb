import React from "react"
import PDF from "../assets/notice-of-privacy.pdf"
import PDF1 from "../assets/Medical-History-Form.pdf"
import PDF2 from "../assets/Back Index.pdf"
import PDF3 from "../assets/Neck.pdf"
import PDF4 from "../assets/Upper.pdf"
import PDF5 from "../assets/Lower.pdf"
import PDF6 from "../assets/JFLS-8.pdf"
import Footer from "./Footer"

const Back = () => {
    return(
        <>
        <div className="compliment">
            <div className="rules">
                <h1>Please bring the following items to your first appointment.</h1>
                <ol style={{listStyleType: 'decimal',display:'flex'}}>
                    <li >Drivers License or Photo ID</li>
                    <li>Insurance Info</li>
                    <li>Physical Therapy Prescription or Referral (if required by your insurance, please contact us if you have questions).</li>
                    <li>New Patient Paperwork; see list below</li>
                    <li>List of current medications, vitamins, and other supplements.</li>
                    <li>Comfortable clothing to wear for exam; we suggest shorts/exercise pants, sneakers, t-shirt.</li>
                </ol>
            </div>
            <div className="head2">
                <h2 style={{width:'60%',marginLeft:'5rem'}}>Please print, fill out, and bring in the following forms that pertain to your injury to your first appointment.</h2>
                
            </div>
            <div className="head3">
                <h1>Back Injury</h1>
            
            
                 
               
                <div className="forms">
                <a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a>
                <a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a>
                <a href = {PDF2} target = "_blank">Back Index Form</a>
                </div>
                
            </div>
        
        
            <div className="head3">
                <h1>Neck Injury</h1>
           
           
                <div className="forms">
                <a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a>
                <a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a>
                <a href = {PDF3} target = "_blank">Neck Index Form</a>
                </div>
            
            </div>
        
            <div className="head3">
                <h1>Upper and Lower Extremities</h1>
            
            
                <div className="forms">
                <a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a>
                <a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a>
                <a href = {PDF4} target = "_blank">Upper Extremity Form</a>
                <a href = {PDF5} target = "_blank">Lower Extremity Form</a>
                 </div>
            
            </div>
        
            <div className="head3">
                <h1 >Jaw Pain/TMD</h1>
            
                <div className="forms">
                <a href = {PDF} target = "_blank">ECPT Notice of Privacy Practices Form</a>
                <a href = {PDF1} target = "_blank">ECPT Patient Medical History Form</a>
                <a href= {PDF6} target = "_blank">Jaw Functional Limitation Scale - 8</a>
                </div>
            
        </div>
        </div>
        
        </>
    )
}

export default Back