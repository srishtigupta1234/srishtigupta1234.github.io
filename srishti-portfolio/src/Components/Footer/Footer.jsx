import React from 'react'
import "./Footer.css"
import icon from "../../assets/icon2.png";
import user from "../../assets/person.svg";

const Footer = () => {
   return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={icon} alt="" />
                <p>I am a full stack developer from, India with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                   <img src={user} alt="" />
                   <input type="email" name="email" id="" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Srishti Gupta. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer