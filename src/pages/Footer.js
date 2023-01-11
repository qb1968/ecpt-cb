import React from "react"

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="foot" >{`Copyright © Jonathan Mark Allison ${year}`}</footer>;
  };
  
  export default Footer;