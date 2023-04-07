import React from 'react'; 
import User from "../../Usercard/Usercard"
import imgs from "../../../assets/images/1.png";
import imgss from "../../../assets/images/2.png";
import imgsss from "../../../assets/images/3.png";
import "./index.scss";
const Future = () => {
    return (
        <>
              <section className="future_section">
              <div className="container">
                <h2>Featured works</h2>
                <div className="future_wrapper">
                 <User img={imgs} 
                       title="Vibrant Portraits of 2020"
                       year="2020"
                       category="Dashboard"
                       text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                 />
                 <p className='text_res'>s</p>
                   <div className="line"></div>
                   <User img={imgss} 
                       title="Vibrant Portraits of 2020"
                       year="2018"
                       category="Illustration"
                       text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                 />
                  <div className="line"></div>
                  <User img={imgsss} 
                       title="36 Days of Malayalam type"
                       year="2017"
                       category="Typography"
                       text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                 />
                  <div className="lines"></div>

                </div>
              </div>



            </section>
        </>
    );
};

export default Future;