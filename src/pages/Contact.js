import React from "react"
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'


const Contact = () => {
    const mapStyles = {        
        height: "50vh",
        width: "40%"};
      
      

      const position = {
        
        lat: 38.69824,
        lng: -76.53299
      }

     

      
    return (
        <>
         <div className="contact">
            <h1>We are located at 8501 Bayside Road Suite C-4 in Chesapeake, Maryland</h1>
           
             {/* <LoadScript
       googleMapsApiKey='AIzaSyDei6-ylpxrE0hSeiIVLMjfAuFi3FYqoI8'>
        <GoogleMap
        
          mapContainerStyle={mapStyles}
          zoom={17}
          center={position}
        />
         
       
     </LoadScript>     */}
        <iframe
         src="https://storage.googleapis.com/maps-solutions-s20gnpb9k9/locator-plus/0uve/locator-plus.html"
         width="60%" height="50%"
         style={{border: 0}}
         loading="lazy">
        </iframe>
  
         </div>
         </>
       
    )
}

export default Contact