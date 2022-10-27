import React, { useRef } from 'react';
import classes from "../../styles/form.module.css";
import emailjs from 'emailjs-com';



const Form = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_srhn23f', 'template_pp8bs3e', form.current, 'H_ok4yYjuzbur2EbK')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

 

  return (
    <div>
    <form className={`${classes.form}`} ref={form} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input name = 'name' type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input name= 'email' type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea name='message' type="text" rows={5} placeholder="Message" required />
      </div>
      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>

    </div>
  );
  }

export default Form;
