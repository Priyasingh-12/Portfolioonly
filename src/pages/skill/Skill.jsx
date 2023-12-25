import React from "react";
import { resume } from "../../data";
import Html from "../../assets/html.png";
import Css from "../../assets/css-3.png";
import Javascript from "../../assets/js.png";
import Bootstrap from "../../assets/bootstrap.png";
import Node from "../../assets/nodejs.png";
import Lib from "../../assets/library.png";
import Mongo from "../../assets/mg.png";
import ResumeItem from "../../components/ResumeItem";
import Footer from '../../components/Footer';
import "./skill.css";

const Skill = () => {
  return (
    <>
    <section className="skills" id="skills">
    <h2 className="heading">My <span>Skills</span> <span className="animate" style={{"--i":1}}></span>
        <span className="animate" style={{"--i":1}}></span>
    </h2>
    <div className="skills-row">
        <div className="skills-column">
            <h3 className="title">Technical skills <span className="animate" style={{"--i":2}}></span> </h3>

            <div className="skills-box">
                <div className="skills-content">

                <div className="progress">
                <h3>HTML5 <span>99%</span></h3>
                <div className="bar"><span></span></div>
            </div>

            <div className="progress">
                <h3>CSS3 <span>90%</span></h3>
                <div className="bar"><span></span></div>
            </div>

            <div className="progress">
                <h3>JAVASCRIPT <span>92%</span></h3>
                <div className="bar"><span></span></div>
            </div>

            <div className="progress">
                <h3>REACT.JS <span>80%</span></h3>
                <div className="bar"><span></span></div>
            </div>

            <div className="progress">
            <h3>NODE.JS <span>80%</span></h3>
            <div className="bar"><span></span></div>
        </div>

        <div className="progress">
            <h3>EXPRESS.JS <span>90%</span></h3>
            <div className="bar"><span></span></div>
        </div>

        <div className="progress">
            <h3>BOOTSTRAP <span>75%</span></h3>
            <div className="bar"><span></span></div>
        </div>

        <div className="progress">
            <h3>MONGODB <span>60%</span></h3>
            <div className="bar"><span></span></div>
        </div>
        </div>
        <span className="animate" style={{"--i":3}}></span>

    </div>
</div>

<div className="skills-column">
<h3 className="title">Professional skills <span class="animate" style={{"--i":5}}></span></h3>

<div className="skills-box">
    <div className="skills-content">

        <div className="progress">
            <h3>HARD WORKING <span>95%</span></h3>
            <div className="bar"><span></span></div>
        </div>

        <div className="progress">
            <h3>LISTENING <span>90%</span></h3>
            <div className="bar"><span></span></div>
        </div>

        <div className="progress">
            <h3>MANAGEMENT SKILLS <span>70%</span></h3>
            <div className="bar"><span></span></div>
        </div>
        <div className="progress">
        <h3>COMPUTER SKILL <span>70%</span></h3>
        <div className="bar"><span></span></div>
    </div>

    <div className="progress">
        <h3>PROBLEM SOLVING SKILLS <span>85%</span></h3>
        <div class="bar"><span></span></div>
    </div>

    <div className="progress">
        <h3>PUNCTUAL <span>90%</span></h3>
        <div className="bar"><span></span></div>
    </div>

    <div className="progress">
        <h3>SELF CONFIDENCE <span>75%</span></h3>
        <div className="bar"><span></span></div>
    </div>
    <div className="progress">
    <h3>PUNCTUAL <span>90%</span></h3>
    <div className="bar"><span></span></div>
</div>
</div>
<span className="animate" style={{"--i":6}}></span>

</div>

</div>
</div>

</section>
      {/* ================================================================================================== */}
      <section className="resume">
        <h2 className="section__subtitle subtitle__center">Experience</h2>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
              return null; // Add this line
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
              return null; // Add this line
            })}
          </div>
        </div>
      </section>
         {/* ================================================================================================== */}
         <section className="section-title">
         <h1 className="heading">Technologies</h1>

         <div className="row container grid">

         <div className=" techno text-center">
         <span><img src={Html} alt="html"/></span>
         <h4 className="title">HTML5</h4>
         <p className="Description">
         HTML (Hypertext Markup Language) is a markup language used for creating web pages and other information that can be displayed in a web browser.
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Css} alt="css" height="36px" width="36px"/></span>
         <h4 className="title">CSS3</h4>
         <p className="Description">
         CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and layout of web pages.
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Javascript} alt="js" height="36px" width="36px"/></span>
         <h4 className="title">JAVASCRIPT</h4>
         <p className="Description">
         JavaScript is a high-level, interpreted programming language used to create interactive and dynamic websites.
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Bootstrap} alt="bootstrap" height="36px" width="36px"/></span>
         <h4 className="title">BOOTSTRAP</h4>
         <p className="Description">
         Bootstrap is a popular front-end framework for building responsive and mobile-first websites.
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Lib} alt="react" height="36px" width="36px"/></span>
         <h4 className="title">REACT.JS</h4>
         <p className="Description">
         React JS is a JavaScript library for building user interfaces
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Node} alt="node" height="36px" width="36px"/></span>
         <h4 className="title">NODE.JS</h4>
         <p className="Description">
         Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.
         </p>
         </div>

         <div className="techno text-center">
         <span><img src={Mongo} alt="mgo" height="36px" width="36px"/></span>
         <h4 className="title">MONGODB</h4>
         <p className="Description">
         MongoDB is a document-oriented NoSQL database system that uses a JSON-like format to store data.
         </p>
         </div>
         </div>

         </section>
         <Footer/>
    </>
  );
};

export default Skill;
