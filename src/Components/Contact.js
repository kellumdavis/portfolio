import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import resume from '../assets/Resume.pdf'

export const Contact = () => {
  
    const [isShown, setIsShown] = useState(false);
    const [isSeen, setIsSeen] = useState(false)
    const form = useRef();

    function handleClick(e) {
        setIsShown(false);
        setIsSeen(true);
    }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_ww8ec59",
        "template_es8blob",
        form.current,
        "909NKVUG8V9irCmon"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactForm">
      <div className="contactTitle">
        <h1>Contact</h1>
      </div>
      <div className="buttons">
      <button type="button" className="btn" onClick={() => setIsShown(true)} onDoubleClick={() => setIsShown(false)} >E-mail</button>
      <a href={resume} download='KellumDavisResume' target='_blank' rel="noreferrer">
      <button type="button" className="btn">Résumé</button>
      </a>
      </div>
      {isShown && (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="submitEmail" type="submit" value="Send" />
      </form>
      )}
  {isSeen && (
  <div className="emailConfirm">
      <h2>I'll be in Touch!</h2>
  </div>
  )}
    </div>
  );
};

export default Contact;
