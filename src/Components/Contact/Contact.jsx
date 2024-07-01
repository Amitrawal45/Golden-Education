import React from "react";
import message from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7e3c8b68-191b-41c3-b685-c4cb42891342");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Send a message <img src={message} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          deleniti libero modi asperiores dolorem excepturi neque quisquam rem
          facere voluptatem consequatur reiciendis amet, vel aut ex eaque,
          dolores a perferendis.
        </p>
        <ul>
            <li><img src={mail} alt="" />arawal954@rku.ac.in</li>
            <li><img src={phone} alt="" />+917058467235</li>
            <li><img src={location} alt="" />Dhangadhi, Nepal</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label >Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label >Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Pnone Number" required />
            <label >Write Your Message Here</label>
            <textarea name="message"  rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn dark-btn">Send now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
