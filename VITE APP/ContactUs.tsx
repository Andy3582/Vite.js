import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

  
 interface ContactUsProps{
  current:string;

 }


  export const ContactUs = ({current}:ContactUsProps) => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   

    

    const current = form.current;
    emailjs.sendForm('service_bee7udn', 'template_vdet76c','current', 'kfaEWGHM09mTzxJTj')
      .then((result) => {
          console.log(alert("THANK YOU FOR YOUR MESSAGE!"));
      }, (error) => {
          console.log(alert("ERROR!"));
      });
  };


  

  return (
    <form  onSubmit={sendEmail}>
      <label className='label'>Name:</label>
      <input className='input' type="text" name="user-name" />
      <label className='label'>Email:</label>
      <input className='input'  type="email" name="user-email" />
     <button className='submit'   type="submit" value="send">SUBMIT</button>
     </form>
  );
};
