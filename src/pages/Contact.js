import React from "react"



const Contact = () => {
    
      
      

     

     

      
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
         loading="lazy"
         title="Elite Care">
         
        </iframe>
  
         </div>
         </>
       
    )
}

export default Contact