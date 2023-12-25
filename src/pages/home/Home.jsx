import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css';

const Home = () => {
    return ( 
        <section className='home section grid'>
        <img src={Profile} alt='' className='home__img'/>
        <div className='home__content'>
        <div className='home__data'>

        <h1 className='home__title'>
        <span>I'am Priya Singh.</span> <br/>
       
        <div className='textanimate'>
        Mern Developer
        <span className="animate" style={{'--i': 3}}></span>
        </div>
       
        </h1>

        <p className='home__description'>I'm a graduate engineer from vindhya institute of technology <br/> looking for an opportunity as an
        Frontend Developer. <br/> I've always been passionate and enthusiastic about <br/> programming, solving
        some Programming question like <br/> in competitive coding and working in the Software Development <br/>
        field has been my goal.
        </p>

        <Link to="/about" className='button'>
        More About Me <span className='button__icon'>
        <FaArrowRight />
        </span>
        </Link>

        </div>
        </div>
        <div className='color__block'></div>
        
        </section>
     );
}
 
export default Home;