import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dfb7326f-f167-431f-803f-df4cfdf4e043");

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
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon}/></h3>
            <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon}/>Contact@GreatStack.dev</li>
                <li><img src={phone_icon}/>+1 123-456-7890</li>
                <li><img src={location_icon}/>77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>
            </ul>
        </div>
        <div className='contact'>
            <form onSubmit={onsubmit}>
              <label>Your name</label>
              <input type='text' name='name' placeholder='Enter your name' required/>
              <label>Phone Number</label>
              <input type='number' name='number' placeholder='Enter your mobile number' required/>
              <label>Your Mail</label>
              <input type='text' name='email id' placeholder='Enter your email id' required/>
              <label>Write your message here</label>
              <textarea  name='tele' rows="9"  placeholder='Enter your message' required/>
              <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact