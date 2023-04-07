import React from 'react'; 
import Card from "../../Card/Card"
import "./index.scss";
const Posts = () => {
    return (
        <>
        <section className="Posts">
                <div className="container">
                    <div className="Posts_title">
                        <h2>Recent posts</h2>
                        <p>View all</p>
                    </div>
                    <div className="posts_wrap">

                           <Card title="Making a design system from scratch" 
                                 year="12 Feb 202012" 
                                 name="Design, Pattern" 
                                 text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                           />   
                            <Card title="Creating pixel perfect icons in Figma" 
                                 year="12 Feb 202012" 
                                 name="Design, Pattern" 
                                 text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                           />   


                          {/* <div className="posts_wrap_one">
                            <h3>Making a design system from scratch</h3>
                            <p>12 Feb 202012      |    Design, Pattern</p>
                            <p className="posts_wrap_one_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div>
                          <div className="posts_wrap_two">
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <p>12 Feb 202012    |    Design, Pattern</p>
                            <p className="posts_wrap_two_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div> */}
                    </div>
                </div> 
            </section>
        </>
    );
};

export default Posts;