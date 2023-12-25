import React from "react";
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import {FaDownload} from 'react-icons/fa';
import CV from '../../assets/mycv.pdf';
import Footer from '../../components/Footer';

import './about.css';

const About = () => {
    return ( 
        <>
        <main className="section container">

        <section className="about">
        <h2 className="section__title">About
        <span>Me</span></h2>

        <div className="about__container grid">
        <div className="about__info">
        <h3 className="section__subtitle">Personal  <span> Infos</span> </h3>
        <ul className="info__list grid">
        <Info/>
        </ul>
        <a href={CV} download ='' className="button">
        Download CV 
        <span className="button__icon">
        <FaDownload/>
        </span>
        </a>
        </div>

        <div className="stats grid">
        <Stats/>
        </div>
        </div>
        </section>


        <section className="education" id="education">
        <h1 className="heading">My <span>Journey <span className="animate" style={{"--i":1}}></span> </span> <span className="animate"
                style={{"--i":3}} ></span>
            <span className="animate" style={{"--i":2}} ></span>
        </h1>

        <div className="education-row">
            <div className="education-column">
                <h3 className="title">Education<span className="animate" style={{"--i":3}}></span>
                </h3>

                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2022</div>
                            <h3>J spider Training</h3>
                            <p>coarse-Mern stack</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2013-2017</div>
                            <h3>Vindhya Institute of Technology</h3>
                            <p>bachelor of Engeneering (Electronics and Telecommunication) -71%</p>
                        </div>
                    </div>
                    <span className="animate" style={{"--i":3}}></span>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2012-2013</div>
                            <h3>Gaurdian and Guide public High School</h3>
                            <p>12th-65%</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2010-2011</div>
                            <h3>Gaurdian and Guide public High School</h3>
                            <p>10th - 65%</p>
                        </div>
                    </div>

                    <span className="animate" style={{"--i":6}}></span>

                </div>
            </div>
        </div>
    </section>
        </main>

        <Footer/>
        </>
      
     );
}
 
export default About;