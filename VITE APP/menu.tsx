import React, { useState, useEffect } from "react";
import "./index.css";

  interface App9Props {
  navSize : string;
  setnavSize: void;
  navColor: string;
  setnavColor:void;
  scrollY:number;
  addEventListener: boolean;
  removeEventListener:boolean;
  style : undefined;
  listenScrollEvent: void;
  useEffect:void;
}
                          
  

  export default function App9({}:App9Props) {
  
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 100 ? setnavColor("darkred") : setnavColor("transparent");
    window.scrollY > 100 ? setnavSize("8rem") : setnavSize("2rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
      >
        <ul>

         
        <li> <img className="phone-img" src="https://pngimg.com/uploads/phone/phone_PNG49006.png"></img><h1 className="phone-number">0646464646464</h1></li>
      
          </ul>
          </nav>   
      
      </div>
  );
}