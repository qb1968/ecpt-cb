import React from "react"
import myImage from '../assets/outdoor.jpg'


const Contact = () => {
    
      
      

     

     

      
    return (
        <>
         <div className="contact">
          <div className="contact1">
             <h1>Contact Us</h1>
             <img style={{width:650,height:450,marginLeft:"10rem"}} class="sign1" src={myImage} alt="Logo"></img>
             <h1 class="please" style={{padding:'1rem'}}>Please do not hesitate to call us with any questions</h1>
          </div>
          <div className="add" style={{display:'flex'}}>
            <ol className="address" style={{padding:'1rem',marginRight:'5rem'}}>
              <li className="add1">Elite Care Physical Therapy at Chesapeake Beach </li>
              <li>8501 Bayside Road</li>
              <li>Suite C-4</li>
              <li>Chesapeake Beach, MD 20732</li>
              <li>Phone 443 646 5514</li>
              <li>Fax 410 834 5504</li>
              <li ><a href ='mailto:beach@ecpt-cb.com'>Email:beach@ecpt-cb.com </a></li>
            </ol>
            <ol className="address1" style={{padding:'1rem',marginRight:'5rem'}}>
              <li >   Office Hours  </li>
              <li>Monday 8am-5pm</li>
              <li>Tuesday 8am-12pm</li>
              <li>Wednesday 8am-5pm</li>
              <li>Thursday 8am-5pm</li>
              <li>Friday Closed</li>
            </ol>
          </div>
           
           
             {/* <LoadScript
       googleMapsApiKey='AIzaSyDei6-ylpxrE0hSeiIVLMjfAuFi3FYqoI8'>
        <GoogleMap
        
          mapContainerStyle={mapStyles}
          zoom={17}
          center={position}
        />
         
       
     </LoadScript>     */}
    <div className="maptoo">
        <iframe
        className="map"
         src="https://storage.googleapis.com/maps-solutions-s20gnpb9k9/locator-plus/0uve/locator-plus.html"
        //  width="60%" height="40%"
        //  style={{border: 0}}
        //  loading="lazy"
         title="Elite Care">
         
        </iframe>
  </div>
         </div>

      
         </>
       
    )
}

export default Contact