import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
}  from "@fortawesome/free-brands-svg-icons";



interface SocialFlowProps{
  h1:string;
  img: any;
  p:string;
  size:number;




}


export default function SocialFlow({}:SocialFlowProps) {
  return (
    <div>

        
        <h1 className="media">Stay In Touch:</h1>   
        
      
      <p className="social-container">
        <a
          href="https://www.youtube.com"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        </p>
        <img className="media-img" alt="" src="https://www.thesun.co.uk/wp-content/uploads/2022/05/NINTCHDBPICT000734406970.jpg?w=1040"></img>
        <h1 className="business-iceland">Iceland Tour-Iceland.business.com</h1>
        
    </div>
  );
}