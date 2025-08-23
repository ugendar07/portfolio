import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import C from "../assets/img/C.png";
import CPlus from "../assets/img/c++.png"; 
import Python from "../assets/img/Python.png";
import Solidity from "../assets/img/solidity.svg";
import Java from "../assets/img/Java.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import mongodb from "../assets/img/mongodb.png";
import css from "../assets/img/css.png";
import tailwind from "../assets/img/tailwind.png";
import ts from "../assets/img/ts.png";
import react from "../assets/img/react.png";
import next from "../assets/img/next.png";
import node from "../assets/img/node-js.png";
import mysql from "../assets/img/mysql.png";
import ethereum from "../assets/img/ethereum.png";
import aptos from "../assets/img/aptos.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Investigating novel cryptographic techniques to enhance the security of blockchain networks.<br></br>  Conducting thorough audits of smart contracts to identify vulnerabilities and ensure robustness.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Blockchain</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>DApp Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Cryptography</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                        </Carousel>
                        <p></p>
                        <h2>Languages & Tools</h2>
                        <p> </p>
                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                            <img src={ethereum} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={aptos} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={Solidity} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={C} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={CPlus} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={Python} alt="Image" />                                 
                          </div>
                          
                          <div className="item">
                            <img src={Java} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={react} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={js} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={html} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={css} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={tailwind} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={ts} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={next} alt="Image" />                                 
                          </div>
                          <div className="item">
                            <img src={node} alt="Image" />
                          </div>
                          <div className="item">
                            <img src={mysql} alt="Image" />
                          </div>
                          <div className="item">
                            <img src={mongodb} alt="Image" />                                 
                          </div>
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        
    </section>
    
  )
}
