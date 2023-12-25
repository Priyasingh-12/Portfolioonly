import React from "react";
import Profile from "../assets/home.jpg";
import './stats.css';

const Stats = () => {

    return ( 
<section className="abouts" id="abouts">
    
        <div className="about-img">
            <img src={Profile} alt="priya"/>
            <span className="circle-spin"></span>
            <span className="animate" style={{'--i': 2}}></span>
        </div>

        <div className="about-content">
        <h3>Mern  <span className="animate" style={{'--i': 3}}>Developer</span></h3>
        <p>I'm a Mern Fullstack Developer and <br/> looking for
         an opportunity as an Frontend Developer.<br/>
        I've always been passionate and enthusiastic about <br/>
        programming, solving some Programming question like <br/>
        in competitive coding in the Software Development <br/>
        field has been my goal.
        <span className="animate" style={{'--i': 4}}></span>


        </p>
       

        </div>
</section>

     );
}
 
export default Stats;