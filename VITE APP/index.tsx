
import React from "react"; 
import "./index.css";
import  ReactDOM from "react-dom";
import App9 from "./menu";
import { StrictMode } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import { ContactUs } from "./ContactUs";
import SocialFlow from "./SocialMedia";
import { render } from "react-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';






interface HProps{
  message:string;
}



function H({message}:HProps){
  return(
    <h1 className="effect"> THE ICELAND TOUR{message}</h1>



  );


}
ReactDOM.render(<H message={""} />,document.getElementById('app'));



   







      



interface ToursProps{
 message:string;


}


function Tours({message}:ToursProps){
  return(

      <h1 className="caves-tours">Ice Caves Tours Iceland{message}</h1>

  );



}
ReactDOM.render(<Tours    message={""}/>,document.getElementById('caves-tours'));




interface DontProps {
  message: string;
}
function Dont({message}:DontProps) {
  return(
      <div>
    <h1 className="offers">Don't Forget To Check Our Special Offers{message} </h1>
    </div>


  );




}
ReactDOM.render(<Dont  message={""}/>,document.getElementById('buy-northern'));


                    interface TripProps {
                     message1: any;
                     message2:string;
                     message3:string;
                     message4:any;
                     message5:string;
                     message6:string;
                     message7:string;
                     message8:any;
                    
                    
                    
                    }

                  function Trip({message1,message2,message3,message4,message5,message6,message7,message8}:TripProps) {
                    return(
                    <div className="trip-section"  >
                   
                  
                   <div className="trip-1">
                    <img className="sales-img"     src="https://cdn.getyourguide.com/img/tour/627d1dabf23a0.jpeg/132.webp">{message1}</img>
                     <h1 className="trip-sights">The Northern Light Tour{message2} </h1>
                     <p className="t-1"   >Join this mysterious trip on a dark winter’s night to search for the Northern Lights. This spectacular natural display can be witnessed at any time from the onset of the autumn darkness to the light nights of spring.{message3}</p>
                     <img  className="clock-4"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg">{message4}</img>
                     <p className="hours4"  >4 hours{message5}</p>
                     <p className="free-4">FREE CANCELLATION{message6}</p>
                     <p className="sales-price-2">From £135.50 per person{message7}</p>
                     <img className="adventures-logo2" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png">{message8}</img>
                        

                    </div>

                    <div className="trip-2">
                     <img className="sales-img"     src="https://cdn.getyourguide.com/img/tour/2a7c389a96846739.jpeg/132.webp" >{message1}</img>
                    <h1  className="trip-sights">The Northern Lights By Boat {message2}</h1>
                    <p className="t-2">Chase the northern lights by boat, just 15 minutes from Reykjavik's Old Harbor. If the lights aren't visible because of clouds, you'll get a bonus experience instead.{message3}</p>
                    <img  className="clock-12"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg">{message4}</img>
                     <p className="hours12"  >12 hours{message5}</p>
                     <p className="free-12">FREE CANCELLATION{message6}</p>
                     <p className="sales-price-2">From £218.70 per person{message7}</p>
                     <img className="adventures-logo2" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png">{message8}</img>
                        

                    </div>

                     <div className="trip-3">
                     <img className="sales-img"     src="https://cdn.getyourguide.com/img/tour/5ac505b28d4ac.jpeg/132.webp">{message1}</img>
                    <h1 className="trip-sights">The Northern Lights Jeep Tour{message2} </h1>
                    <p className="t-3"> Go in search of the Northern Lights on this 4-hour night tour from Reykjavik. Traveling by 4x4 Land Rover Defender or 6-door Ford Excursion.{message3}</p>
                    <img  className="clock-7"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg">{message4}</img>
                     <p className="hours7"  >7 hours{message5}</p>
                     <p className="free-7">FREE CANCELLATION{message6}</p>
                     <p className="sales-price-2">From £148.50 per person{message7}</p>
                     <img className="adventures-logo2" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png">{message8}</img>
                        


                      
                    </div>
                    <div className="trip-4">
                     <img className="sales-img"     src="https://cdn.getyourguide.com/img/tour/5db0837955e6e.jpeg/132.webp">{message1}</img>
                    <h1 className="trip-sights">The Northern Lights Hike {message2} </h1>
                    <p className="t-4">Join a certified mountain guide for this unforgettable experience, heading out on this incredible Northern Lights tour. Leaving from Reykjavik, head into the Icelandic countryside.{message3}</p>
                    <img  className="clock-6"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg">{message4}</img>
                     <p className="hours6"  >6 hours{message5}</p>
                     <p className="free-6">FREE CANCELLATION{message6}</p>
                     <p className="sales-price-2">From £168.50 per person{message7}</p>
                     <img className="adventures-logo2" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png">{message8}</img>
                        

                    

                    </div>
                     </div>


                       );
                  }
                  ReactDOM.render(<Trip  message1={undefined} message2={""} message3={""} message4={undefined} message5={""} message6={""} message7={""} message8={undefined} />,document.getElementById('business-northern'));


                 
                  
                 
                   















    
        
    
        
   

                    


  

















  








             
    
    








                  
                   
                   
                 
  


     interface AppProps{
     message:string;
     autoPlay:boolean;
     autoPlayInterval:string;
     infinite:boolean;
     mouseTracking:boolean;
     animationType:any;
    
                         }
    
    function App({message}:AppProps) {
     return (
    <div className="gallery">
      <AliceCarousel autoPlay autoPlayInterval="2000" infinite   animationType="fadeout" mouseTracking >
     <div>
     {message}
      <img src="https://images6.alphacoders.com/314/thumb-1920-314562.jpg" className="sliderimg" alt=""/>
      </div>
       <div>
       {message}
        <img src="https://icelandmag.is/sites/default/files/styles/lightbox/public/thumbnails/image17mynf99160113_nord_05.jpg?itok=q_WGu87w" className="sliderimg" alt=""/>
        </div>
     <div> 
     {message}
      <img src="https://i.pinimg.com/originals/77/b3/79/77b379a6428e2d093a42d5d02775e863.jpg" className="sliderimg" alt=""/>
      </div>
     <div>
     {message}
      <img src="https://cdn.fstoppers.com/styles/medium/s3/photos/80050/11/07/636f5c9447b44490c3ca3c79efc1fe67.jpg" className="sliderimg" alt=""/>
      </div>
      <div>
      {message}
        <img src="https://images.ctfassets.net/a68ipajj4t9l/FUjszBrEpBo6ibZAWYzM1/940f2fc9b6a9b1ea713d239f9c5ebadb/RE63-min-progressive.jpeg?w=2400&q=60" className="sliderimg" alt=""/>
      </div>
      <div>
      {message}
      <img  src="https://www.nordicvisitor.com/images/blogs/2015-09-dagur-northern-lights-2.jpg" className="sliderimg" alt=""/>
      </div>
       </AliceCarousel>
      </div>
   
     );
    }
    

   ReactDOM.render(<App   message={""} autoPlay={false} autoPlayInterval={""} infinite={false} mouseTracking={false} animationType={undefined}/>,document.getElementById('carousel'));










				
					









  
        

     

interface  MediaProps{
message:string;

} 
  


function Media() {
  return (
    <div className="media-footer">
      <SocialFlow h1={""} img={undefined} p={""} size={0} />
    </div>
  );
}

const rootElement2 = document.getElementById("social-media");
render(<Media />, rootElement2);




  interface ScrollProps {
     showBtn:string;
      setShowBtn:string;
      useState:string;
      onscroll:  null;
      scrollTop: number;
      topFunction: void;
      

  }


   

   function Scroll({}:ScrollProps) {
  const [showBtn, setShowBtn] = useState("myBtn none");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    Test();
  };

  function Test(): void {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        Top
      </button>

     
      
    </div>
  );
}

ReactDOM.render(<Scroll showBtn={""} setShowBtn={""} useState={""} onscroll={null} scrollTop={0} topFunction={undefined}/>,document.getElementById('top-button'));










// AOS.init()

AOS.init({
  
  offset: 300,
  duration: 1300,
  easing: 'ease-in-out-sine',
  delay: 800,
  mirror: true
});




const rootElement8 = document.getElementById("navbar");
ReactDOM.render(
  <StrictMode>
    < App9 navSize={""} setnavSize={undefined} navColor={""} setnavColor={undefined} scrollY={0} addEventListener={false} removeEventListener={false} style={undefined} listenScrollEvent={undefined} useEffect={undefined} />
  </StrictMode>,
  rootElement8
);


















interface Component123Props {
 img: string;
}


function Component123({}:Component123Props){
    return (
     <img className="background"  src="https://images6.alphacoders.com/903/903645.jpg" ></img>
   );
}
ReactDOM.render(<Component123 img={""}/>,document.getElementById('background-image'));




  
interface ReadinfoProps {
  message: string;
 }
  function Readinfo({message}:ReadinfoProps){
   return (<div>
     
    <button className="button" >  "Iceland has an abundance of clean, renewable energy thanks to its
       remarkable geography and geology." {message}</button>
    
          </div>
     );
}
ReactDOM.render(<Readinfo  message={""}/>,document.getElementById('button-readinfo'));




const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});







interface ImageProps {
  message1: string;
  message2:string;
  message3:string;
  message4:string;
 }
 


function Image({message1,message2,message3,message4}:ImageProps){
  return  ( <div >
            <h1 className="land">THE LAND OF FIRE AND ICE {message1}</h1>
        <p className="fire-ice">  Iceland is a country of extreme contrasts and dramatic.<br/> landscapes. Widely known as "the land of fire and ice,"<br/> Iceland is home to some of the largest glaciers in Europe and some of the world's most active volcanoes.
        {message2}          </p>
             <h1 className='get'>GET INSPIRED {message3}</h1>
             <p className="discover"> DISCOVER THE ICELAND TOUR{message4}</p>
            
             
            
          </div>
  );

}

ReactDOM.render(<Image  message1={""} message2={""} message3={""} message4={""}/>,document.getElementById('body'));




interface LightProps {
  message: any;
 }

function Light({message}:LightProps){
  return( 
          <img className="lights1" src="https://www.isak.is/images/template/isak-02-web.jpg"> 
          {message}
           
           </img>
      );
    }

ReactDOM.render(<Light message={undefined}/>,document.getElementById('root'));





interface LagoonProps {
  message1: string;
  message2:string;
  message3:any;

 }

  function Lagoon({message1,message2,message3}:LagoonProps){
  return( <div className="yellow">
    
    <h1 className="blue"> The Blue Lagoon{message1} </h1>
    
    <p className="blue-lagoon">The Blue Lagoon is just a fifteen-minute drive from Keflavík International Airport,<br/> or a thirty-minute drive from Reykjavík, making it easy to reach for those who<br/> rent a car or join a Blue Lagoon tour. It is thus often visited straight after arrival<br/> to the country or right before departure, particularly those who taking guided<br/> packages and self-drive tours, such as this 6-Day Vacation and 10-Day Road Trip. <br/>         The temperature in the bathing and swimming area is very comfortable, averaging<br/> 37–39° C (98–102° F).{message2}</p>

    
      <img className="lagoon-small-img" src="https://guidetoiceland.imgix.net/298360/x/0/the-blue-lagoon-geothermal-spa-lives-up-to-its-name-boasting-beautiful-azure-waters&h=207" alt="">{message3}</img>
      



     </div>

  );
}


ReactDOM.render(<Lagoon message1={""} message3={undefined} message2={""} />,document.getElementById('blue-lagoon'));





interface CardProps {
  message1: any;
  message2:string;
  message3:string;
  message4:any;
  message5:string;
 }
function Card({message1,message2,message3,message4,message5}:CardProps){
  return( 
    <div className="card-video">

     <img  className="compas-image"  src="https://www.transparentpng.com/thumb/compass/clipart-compass-icons-png-26.png">{message1}</img>
    <h1 className="iceland-best">Best Places To Visit{message2}</h1>
    <p className="iceland-best2"> Wild, windswept and caked with icecaps from south to Arctic north, Iceland is a land of steaming volcanos and enchanting fishing towns, rugged canyons and colossal fjords, bubbling hot springs and buzzing vodka bars. Here, we take a look at 10 of the top spots that every traveler to this Scandinavian island should have on the menu (along with the uber-fresh fish of course!).There are too many things to do in Iceland to keep count. It’s a realm of stark contrasts. It’s an island of striking landscapes where rivers run through deserts and molten lava erupts from ice.

It’s a country where the natural elements dance between the poles of fire and frost, with endless nights during the depth of winter and summers where the sun never sets.It can be a little overwhelming to decide what to do and where to go in Iceland. Before you book your trip, there’s a lot to consider. {message3} </p>


 

                    
<img className="icon-iceland" src="https://th.bing.com/th/id/R.4ed0b377efd6910b79e295078482da1a?rik=Y%2bLvZbtLEA65JA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-foDvk-D8cBQ%2fUSDs8JmQh1I%2fAAAAAAAAQhQ%2frec5q9YKWDE%2fs1600%2ficeland-map.jpg&ehk=CB7yw2TH6SJQsSC47Q2Mih9XvglHVAnp6BXoMay7kNQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1">{message4}</img>
 <h1 className="trips-check">Check Also Our Day Trips Starting From Reykjavik...{message5}</h1>
    </div>   
      );

   }
ReactDOM.render(<Card message1={undefined} message2={""} message3={""} message4={undefined} message5={""}            />,document.getElementById('card-video'));




    interface BuyProps {
       message1: string;
       message2:any;
        }
      function Buy({message1,message2}:BuyProps) {
          return( <div className="buy-now">
                 <p className="offer1">The price includes flight ticket and 7 nights in a hotel for one person.
                 For more information, contact us by phone or email.{message1}
                  </p>
                  <img className="icon-basket" src="https://cdn-icons-png.flaticon.com/512/215/215846.png">{message2}</img>
                   </div>
          );
        }
        ReactDOM.render(<Buy   message1={""} message2={undefined}/>,document.getElementById('buy-now'));

         
      

        interface FormProps{
          message1: string;
          message2:string;
          
        }

        function Form({message1,message2}:FormProps) {
          return (
            <div className="App">
              <h1 className="sign">SIGN UP FOR OUR MAILING LIST{message1}</h1>
              <h1 className="stay">Stay connected and find out what is happening {message2}</h1>
        
              <ContactUs current={""}   />
        
            </div>
          );
        }
        
        const rootElement9 = document.getElementById("form");
        ReactDOM.render(<Form message1={""} message2={""} />,rootElement9);




        interface WeatherProps {
          message1:string;
          message2:string;
        }
            
          function Weather({message1,message2}:WeatherProps)  {
              return(  <div className="weather-card">
                      <h1 className="iceland-time">The Best Time And Weather To Visit{message1}</h1>
                      <p className="iceland-time2">
                      While its far north ocean location makes for fluctuating weather, summer is the best time to visit Iceland. June-August offer long daylight hours, low 20°Cs warmth, plus summer festivals. Dry weather inland makes this prime hiking season. May to September is the best time of year for Iceland if you want to go whale watching. Snow comes as early as September and can linger to May, but Iceland is very photogenic in autumn and early winter. Winter in Iceland (November-March) can be brutal and road closures make access to some areas difficult but offer a better chance at seeing the Northern Lights. You can combine orca watching with the Northern Lights in February and March.{message2}</p>
                      </div> 
    
          );
        }
        ReactDOM.render(<Weather   message1={""} message2={""}/>, document.getElementById('time-weather'))


        interface VideoProps{
          message1:string;
          message2:string;



        }
        function Video({message1,message2}:VideoProps) {

          return( 
            <div >
              <iframe className="iframe" width="900" height="550" src="https://www.youtube.com/embed/u_f90pXw5sQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>{message1} </iframe>
              <p className="places">{message2}</p>
                                              
                  
              </div>
              
          );
        }
  
        ReactDOM.render(<Video message1={""} message2={""} />, document.getElementById('video'))
        
        
        
        interface ClockProps{
        message:string;
        frameBorder:number;
        width:number;
        height:number;
        allowTransparency:true;


        }
        
        function Clock( {message}:ClockProps )  {
          

          

                        
          return (  <div className ="local-time-iceland" >
                    <h1 className="local-reykjavik">LOCAL TIME IN REYKJAVIK{message}</h1>                              
                    <iframe className="clock" src="https://free.timeanddate.com/clock/i8ggo2gd/n211/fn11/fs42/tcf90/pct/bls0/blt0/brs0/brt0/bts0/btt0/bbs0/bbt0/pa5/th2" frameBorder= "0" width="217" height="61" allowTransparency={true} ></iframe>
                    </div>
                      );
                     }
             ReactDOM.render(<Clock message={""} frameBorder={0} width={0} height={0} allowTransparency={true} />, document.getElementById('clock'))
         



                 interface CertificatesProps{
                   message1:any;
                   message2:any;
                   message3:any;

                 }

                  function Certificates({message1,message2,message3}:CertificatesProps ){
                     return (
                  <div>
                 <img className="certificates" src="https://www.bluecarrental.is/assets/images/footer-logos.png">{message1}</img>
                  
                 <img  className="certificates1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds4KPzLqP85dsgoPrcUbvdNl1faARpavfAQ&usqp=CAU">{message2}</img>
                 <img className="certificates2" src="https://www.ferdamalastofa.is/static/files/ferdamalastofa/island2020/ferdaskrifst-200.png"   >{message3}</img>
                 </div>
                   );
         }
         ReactDOM.render(<Certificates message2={undefined} message1={undefined} message3={undefined} />, document.getElementById('images'))


       interface CavesProps{
       width:number;
       height:number;
       src:string;
       title:string;
       frameBorder:number;
       allow:string;
       }

         
         function Caves({}:CavesProps) {
           return(
      
            <iframe className="video-caves"  width="860" height="615" src="https://www.youtube.com/embed/i1DGS5NGliQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>





           );
         }

         ReactDOM.render(<Caves width={0} height={0} src={""} title={""} frameBorder={0} allow={""}/>, document.getElementById('caves-video'))

         


         function Alice(){
          return (
            
            <div className="alice-carousel">
             <AliceCarousel autoPlay autoPlayInterval="3000" infinite   animationType="fadeout" mouseTracking disableButtonsControls >
              <div className="slide-carousel-1">
                <img className="img-slide-1" src="https://cdn.getyourguide.com/img/tour/5cb5fcf8be6c1.png/132.webp"></img>
                <img  className="artic-adventures" src="https://adventures.is/assets/images/brand/aa_logo.svg"  ></img>
                
                <h1 className="adventure-h1">Adventure</h1>
                <img className="best-seller" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wlMSbAwmlX3mXIBK4SWL4RPip1WfB2S3NA&usqp=CAU"></img>

                <h1 className="Cave"> From Vik:Katla Ice Cave Jeep Tour and Glacier Walk </h1>  

                 <p className="hours">3 Hours</p>  <br/>
                  
                 <h1 className="price" > From £123.85  per person </h1> 
                 </div> 

                 
                 
                 
                
               
               <div className="slide-carousel-2">
                <img  className="img-slide-2"       src="https://cdn.getyourguide.com/img/tour/6041d2ddbcffb.jpeg/132.webp"></img>
                <img  className="artic-adventures" src="https://adventures.is/assets/images/brand/aa_logo.svg"  ></img>

                <h1 className="adventure-h1" >Guided Tour</h1>
                <h1 className="Cave"> Iceland : Lava Caving Small Group Adventure </h1>  

                 <p className="hours">1-3 Hours.Small group.Pickup avialable</p>  <br/>
                  
                 <h1 className="price" > From £46.34  per person </h1>   
                 
                </div>
             <div className="slide-carousel-3"> 
             <img  className="img-slide-3"     src="https://cdn.getyourguide.com/img/tour/6204ac623f3b8.jpeg/132.webp"  ></img>
             <img  className="artic-adventures" src="https://adventures.is/assets/images/brand/aa_logo.svg"  ></img>

             <h1 className="adventure-h1"> Day Trip </h1>

             <h1 className="Cave"> From Reykjavik:Guided Exploration of Katla Glacier & Caves </h1>  
             <p className="hours">  hours.Small group.Pickup avialable</p>  <br/>
              
             <h1 className="price" > From £316.08  per person </h1>   
                 

              </div>
             <div className="slide-carousel-4">
              <img   className="img-slide-4"       src="https://cdn.getyourguide.com/img/tour/5d1f517337547.jpeg/132.webp"></img>
              <img  className="artic-adventures" src="https://adventures.is/assets/images/brand/aa_logo.svg"  ></img>

              <h1 className="adventure-h1"  >Private Tour </h1>
              <h1 className="Cave">Golden Circle Tour and Caving in <br/> Leidarendi Lava Tunnel      </h1>  

                <p className="hours">8 hours.Small group.Pickup avialable</p>  <br/>
     
                <h1 className="price" > From £123.85  per person </h1>   


              </div>
            </AliceCarousel>
            </div>
           
             );
            }
          ReactDOM.render(<Alice/>,document.getElementById('alice-carousel'));

           
          function Bird(){
              return(
                    <div>
                   <img className="puffin"  src="https://nimiuscms.imgix.net/images/05atlanticpuffins-20220516172510.JPG?auto=compress%2Cformat&q=75&size=max-w&w=800" ></img>
                   <img className="mr-puffin"  src="https://cdn.tourdesk.io/vendor/b5452c4f989067e19c2d959fef60b0d11bef122219d2f37625ebed671feb27df.png"></img>
                    </div>
                    );
           }

           ReactDOM.render(<Bird/>,document.getElementById('bird'));




           interface MessageProps {
            message: string;
                               }
           function Bird1(props:MessageProps) {
              return(  
                <div>  
                <p className="puffin-text"> The name “puffin” originally referred to young fatty, salted, “puffed” puffin meat. The Icelandic name for puffins is Lundi, but the bird has many nicknames such as “little monk in the north” and “little brother in the north”.

                Lundi is usually referring to the bird that has 60% of the entire universal population mating in Iceland, which is the Atlantic Puffin. Maybe that's why when people say the “Icelandic puffin” they mean the Atlantic one.
                
                Penguins and ostriches are known for not being the best flyers and the same goes for puffins. Unlike penguins and ostriches, puffins can actually fly but they are very awkward at it and spend most of their time at sea as they are very good swimmers. Puffins mostly hunt for food by diving into the water and catching fish. </p>

                </div>
            );
           }
           ReactDOM.render(<Bird1   message={""}/>,document.getElementById('bird-1'));




           interface MessageProps {
            message: string;
           }
           function Location(props:MessageProps) {
              return( 
                      <div>
               <h3 className="puffin-location-check">Check Out The Best Places To See Puffins...</h3>         
              <img className="puffin-location" src="https://nimiuscms.imgix.net/images/02puffiniceland-20220516172140.JPG?auto=compress%2Cformat&q=75&size=max-w&w=800"></img>
                      </div>     
            );
           }
           ReactDOM.render(<Location  message={""}/>,document.getElementById('bird-map'));


           interface MessageProps {
            message: string;
           }
           function Location1(props:MessageProps)   {
               return (
                        <div>
                <p className="puffin-location2"> There are a number of places in Iceland where sightings of the Atlantic Puffin are plentiful.<br/> There are guided puffin watching tours all over the country, but in many cases, it is also possible to drive to their habitual locations to spend an afternoon with them.<br/> This list is the most complete guide yet to finding puffin in Iceland.

                Note! Never approach too close to the cliff edges as the burrows that the puffins have dug make the ground lose and hollow!    </p>
                 <img   className="map-puffin"  src="https://adventures.is/media/139065/puffins-iceland-1.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132363647310000000&quality=80&format=webp" alt=""></img>
                     </div>

             );
           }

           ReactDOM.render(<Location1   message={""}/>,document.getElementById('bird-map-1'));






           
          



           

           function Pay(){
               return (

                  <div>
                    <h1 className="pay-cards"  > Ways You Can Pay: </h1>
                    <img className="way-to-pay-us"    src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/paypal_border.svg"></img>
                    <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/mastercard.svg"    ></img>
                    <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/visa.svg"   ></img>
                    <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/maestro.svg"    ></img>
                    <img  className="way-to-pay-us"    src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/klarna.svg"   ></img>
                    <img  className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/discover.svg"></img>
                    <img  className="way-to-pay-us"      src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/googlepay.svg"></img>
                  </div>
                );

             }
          
             ReactDOM.render(<Pay/>,document.getElementById('way-to-pay-us'));



             function CavesText() {
                 return(
                  <div className="caves-text" >
                       
                      
                      
                      
                 <p className="ice-caves" > Ice caves are natural phenomena that are formed in glaciers during winter. Most often they are formed by water running through or under the glacier and new caves are formed every year. Our Iceland’s Ice Cave tours are of two main kinds, based on the type of cave we visit: a naturally formed cave in the Vatnajökull glacier and a man-made cave in the Langjökull glacier.When you are in an Icelandic ice cave, you are literally standing inside a glacier; it is all around you – an absolutely unique and totally magical experience! Sometimes you will even hear the ice creaking, reminding you that the glacier is, in fact, a vibrant, moving phenomenon of nature.Technically speaking, the ice caves in Iceland should be called glacier caves. However, ‘ice cave’ is the name which has caught on and is now recognized by tourists and locals alike. All of the Icelandic ice caves referred to below are actually glacier caves because they are formed entirely from ice within glaciers. In purely technical terms, an ice cave is just a regular cave which has a large quantity of ice inside it.</p>
                 <h1 className="caves-form">HOW DO ICE CAVES FORM?</h1>
                 <img className="artic6" src="https://adventures.is/assets/images/brand/aa_logo.svg" alt="" ></img>

                <p className="caves-text-1"> Ice Caves or Ice Tunnels are formed when meltwater, or as happens mainly in Iceland, geothermal heat melts the glacial ice. The glaciers then move, making their way further down and when that happens a hollow space is often created. This is how an ice cave forms and is therefore usually found at the foot of the glacier.

                 The constant movement and melting of the glaciers lead to the ice caves constantly changing as well. They can look completely different depending on the season or sometimes even months. This is why people often join the same Ice Cave Tour a few times if revisiting Iceland. Usually, ice caves in Iceland are available during the winter season (October-April), so don't miss the opportunity to visit this natural beauty, check our winter tours.</p>

                 </div>
               );
             }
             ReactDOM.render(<CavesText/>,document.getElementById('caves-text'));


             function Northern(){
               return(
                      <div className="polar-lights-3">
                      <h1 className="polar-lights-1">THE NORTHERN LIGHTS TOURS</h1>  
                      <p className="polar-lights">The polar lights appear near the Poles. In these areas, the winters are very dark while the summers are completely bright. The closer we get to the poles, the more the days and nights disappear and there is half a year of darkness and half a year of brightness instead.

                      Iceland is close enough to the North Pole to have a few months of the midnight sun during which the sky is too bright for the Northern Lights to appear. They are still there but the sky is lit up by the sun so we cannot detect the Aurora Borealis in Iceland.
                      
                      In winter, however, there are a few weeks of almost complete darkness. There is also a seven-month-long period from September to March when we have both dark nights and bright daylight which allows us the chance to enjoy the Auroras at night. Therefore, only those who come to Iceland between late August and early April will have a chance to see the Aurora.</p>
                      <img className="artic-adventures2" src="https://adventures.is/assets/images/brand/aa_logo.svg" alt="" ></img>
                      
                      
                    </div>


               );



             }
             ReactDOM.render(<Northern/>,document.getElementById('carousel-northern-lights'));



             function Aurora() {
               return(
               
                
                <img  className="aurora" src="https://expertvagabond.com/wp-content/uploads/northern-lights-iceland-pin-A-400x600.jpg"></img>




               );

             }
             ReactDOM.render(<Aurora/>,document.getElementById('northern-logo'));



             function Contact() {
               return (
                     <div className="contact-support" >
                      <h1 className="here-help">WE ARE HERE TO HELP</h1>
                      <h1 className="considering-tour">Considering buying a tour?</h1>
                      <h2 className="talk-staff">Talk to our staff</h2>
                     <h1 className="opening-hours">Customer Care</h1>
                     <h2 className="gmt">Opening Hours</h2>
                     <p className="customer-care">6:00am - 7:00pm GMT (Monday-Sunday) </p>
                  
                      
                     
                      <div className="call-block">
                      <p className="call-us">Call Us:</p>
                      
                      <p className="number-iceland" >0646464646464</p>
                      </div>
                      <div className="email-block">
                     <p className="email-us">Email Us :</p> 
                     <p className="mail-iceland">Iceland@Iceland.com</p>
                     </div>
                     <img className="our-staff"   src="https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/04/Service-Help-Desk.png"></img>
                     <img  className="our-staff2"   src="https://www.nordicvisitor.com/images/about-us/nv_staff_here_to_help_2021.png"></img>
                    

                      </div>
                );
              
              }
              ReactDOM.render(<Contact/>,document.getElementById('contact-details'));


              



              
              
              
              
                 function Sales(){
                   return (
                  <div className="sales-section"  >
                   
                  
                   <div className="sales-1">
                    <img className="sales-img"     src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/96/26/caption.jpg?w=300&h=300&s=1"></img>
                     <h1 className="trip-sights">Reykjavik Sights Seeing </h1>
                     <p className="p-1"   >Explore the capital city, Reykjavik, at your leisure on a self-guided walking tour of the city. Once downloaded, the tour app operates offline using GPS and can be paused anytime.</p>
                     <img  className="clock-image"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg"></img>
                     <p className="hours5"  >5 hours</p>
                     <p className="free-cancellation">FREE CANCELLATION</p>
                     <p className="sales-price-1">From £128.50 per person</p>
                     <img className="adventures-logo1" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png"></img>
                        
                    </div>

                    <div className="sales-2">
                     <img className="sales-img"     src="https://media.tacdn.com/media/attractions-splice-spp-360x240/06/f1/2a/7b.jpg" ></img>
                    <h1  className="iceland-sights">Horse Back Riding Tour </h1>
                    <p className="p-2">For all those interested in trying the Icelandic horse, a trek on the hardy, sure-footed Icelandic horse is an amazing experience.</p>
                    <img  className="clock-image2" src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg"></img>
                    <p className="hours8">8 hours</p>
                    <p className="free-cancellation2">FREE CANCELLATION</p>
                    <p className="sales-price-1">From £112.85 per person</p>
                    <img className="adventures-logo1" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png"></img>

                    </div>

                     <div className="sales-3">
                     <img className="sales-img"     src="https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4e/1f.jpg"></img>
                    <h1 className="iceland-sights">The Reykjavik Volcano Flight </h1>
                    <p className="p-3"> Experience an active volcano first hand. Everyone should witness the powers of mother nature from a safe distance and enjoy the views.</p>
                      <img  className="clock-image3"    src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg"></img>
                     <p className="hours3">3 hours</p>
                     <p className="free-cancellation3">FREE CANCELLATION</p>
                     <p className="sales-price-1">From £99.50 per person</p>
                     <img className="adventures-logo1" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png"></img>

                    </div>
                    <div className="sales-4">
                     <img className="sales-img"     src="https://media.tacdn.com/media/attractions-splice-spp-360x240/07/69/1c/4f.jpg"></img>
                    <h1 className="iceland-sights">Inside the Volcano </h1>
                    <p className="p-4">Small Group Thrihnukagigur Hike and Tour from Reykjavik</p>
                     <img   className="clock-image4"  src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg"></img>
                    <p className="hours2">2 hours</p>
                    <p className="free-cancellation4">FREE CANCELLATION</p>

                    <p className="sales-price-1">From £112.85 per person</p>
                    <img className="adventures-logo1" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png"></img>

                    </div>
                     </div>
                   
                   
                 );
                }
                ReactDOM.render(<Sales/>,document.getElementById('sales-cards'));


                function Icon(){
                  return(

                    <img className="icon-iceland" src="https://th.bing.com/th/id/R.4ed0b377efd6910b79e295078482da1a?rik=Y%2bLvZbtLEA65JA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-foDvk-D8cBQ%2fUSDs8JmQh1I%2fAAAAAAAAQhQ%2frec5q9YKWDE%2fs1600%2ficeland-map.jpg&ehk=CB7yw2TH6SJQsSC47Q2Mih9XvglHVAnp6BXoMay7kNQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></img>







                  );

                }

                ReactDOM.render(<Icon/>,document.getElementById('icon'));



                function Cool() {
                  return(
                    <div>
                       <div className="sales-1">
                    <img className="sales-img"     src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/96/26/caption.jpg?w=300&h=300&s=1"></img>
                     <h1 className="iceland-sights">Reykjavik Sights Seeing </h1>
                     <p className="p-1"   >Explore the capital city, Reykjavik, at your leisure on a self-guided walking tour of the city. Once downloaded, the tour app operates offline using GPS and can be paused anytime.</p>
                     <img  className="clock-image"   src="https://static.vecteezy.com/system/resources/previews/004/397/047/original/clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-eps10-free-vector.jpg"></img>
                     <p className="hours5"  >5 hours</p>
                     <p className="free-cancellation">FREE CANCELLATION</p>
                     <p className="sales-price-1">From £128.50 per person</p>
                     <img className="adventures-logo1" src="https://www.seekpng.com/png/full/384-3842720_arctic-adventures-logo-arctic-adventures-iceland.png"></img>
                        
                    </div>






                    </div>
                    );
                }
                ReactDOM.render(<Cool/>,document.getElementById('business-northern'));


               





                






                
                
                
                
              
                  





