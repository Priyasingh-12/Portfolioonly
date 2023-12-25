import React from "react";
import {portfolio} from '../../data';
import PortfolioItem from "../../components/PortfolioItem";
import Footer from '../../components/Footer';
import './portfolio.css';

const Portfolio = () => {
    return ( 
        <>
        <section className="portfolio section">
        <h2 className="section__title">My <span>Portfolio</span>
        </h2>

        <div className="porttfolio__container container grid">
        {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item}/>
        })

        }
        </div>
        </section>
        
        <Footer/>
        </>
      
        
     );
}
 
export default Portfolio;