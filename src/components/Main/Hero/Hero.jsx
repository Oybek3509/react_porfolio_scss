import React from 'react'; 
import "./index.scss";
import imgl from "../../../assets/images/heroimg.png";
const Hero = () => {
    return (
        <>
         <section className="hero_section">

<div className="container">

    <div className="hero_wrapper">
        <div className="hero_item">
            <h2>Hi, I am John,
                Creative Technologist</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
        </div>
        <div className="hero_img">
            <img src={imgl} alt="rasm" />

        </div>

    </div>
</div>


</section>
        </>
    );
};

export default Hero;