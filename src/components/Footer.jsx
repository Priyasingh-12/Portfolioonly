import React from "react";
import {
    FaGithub ,
    FaTwitter,
    FaLinkedin,
    FaInstagram 
} from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import './footer.css';

const Footer = () => {

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Priyasingh-12' },
    { icon: <FaTwitter />, url: 'http://twitter.com' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/priya-singh-236a09249/' },
    { icon: <IoMdMail />, url: 'mailto:piyasngh12@gmail.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
  ];
  
    return ( 
        <footer id="footer">

        <div className="footer-top">
        <div className="footers container grid">

        <div className="row">
        <h2>Priya Singh</h2><br/>
        <p>Bandhav garh colony <br/> satna(M.P)-485001 India</p> 
        <br/>
        <strong>Mobile no :</strong>
        {'\u00A0'}8982044720<br/>
                  6260194827
                  <br/><br/>
        <strong>Email:</strong>
        {'\u00A0'} 
        piyasngh12@gmail.com
       <br/><br/>
       
       <div className='contact__socials' > 

     {socialLinks.map((link, index) => (
       <a href={link.url} key={index} className='contact__social-link'>
       {link.icon}
       </a>
       ))}
     </div>

        </div>

         <div className="row" id="link">
         <h3> Quick Links</h3>
         <ul className="link-only">
         <li className="bx"><a href="/Home">Home</a></li>
         <li className="bx"><a href="/about">About</a></li>
         <li className="bx"><a href="/skill">Skill</a></li>
         <li className="bx"><a href="/portfolio">Portfolio</a></li>
         <li className="bx"><a href="/contact">Contact</a></li>

         </ul>
         </div>

         <div className="row">
         <h3>Our Newsletter</h3><br/><br/>
         <p>Subscribe to our newsletter for daily updates</p><br/>
         <form action meethod="POST">
         <input type="email" name="email" required="" style={{backgroundColor:"beige"}}/>
         <input class="slide-hover-left-1" type="submit" value="Subscribe" />
         </form>
         </div>
        </div>
        </div>

        <div className="footer-bottom">
        <div class="copyright">© Copyright 2023
         <strong><span>Priya Singh</span></strong>.
          All Rights Reserved.
          </div>
        </div>
        </footer>
     );
}
 
export default Footer;