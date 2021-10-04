import React from "react";
import MyCarousel from "../Carousel/Carousel";
import './About.css';

const About = () =>{
    return (
        <div>
            
            <div className="top-banner-background d-flex align-items-center">
                <div className="banner text-center container">
                    <h1>Best IT Training in the Country</h1>
                    <h3>Go ahead, improve your skill your skill with Tech Learning Pathshala</h3>
                    <ul className="fw-bold">
                        <li>Follow Latest Industry Standard Tools and Techniques</li>
                        <li>Learn Teamwork and Collaboration</li>
                        <li>Real World Project Development</li>
                        <li>Build Solid Foundations</li>
                    </ul>
                </div>
            </div>

            <MyCarousel></MyCarousel>
            
            <div className="banner-bg d-flex align-items-center">
                <div className="banner text-center container">
                    <h1>LEARN FROM THE BEST</h1>
                    <h3>Go ahead, improve your skill your skill with Tech Learning Pathshala</h3>
                    <h5 className="px-5">Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses. </h5>
                </div>
            </div>
            
            <div className="bottom-section my-4">
                <div className="mx-5">
                    <div>
                        <h4>Working for the IT Industry</h4>
                        <p>
                        Tech Learning Pathshala has always been passionatly working for the betterment of IT industry. We want to grow skilled IT professionals who will rock the world with their extraordinary professionalism. As part of our mission, we arrange programming contest, software engineering events and seminars. We believe in hard core industry specialization to grow the top 10% IT professionals in the country and around the globe. 
                        </p>
                    </div>
                    <h1>Why You Choose Tech Learning Pathshala:</h1>
                    <div>
                        <h4>Follow Latest Industry Standard Tools and Techniques</h4>
                        <p>
                        Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.  
                        </p>
                    </div>
                    <div>
                        <h4>Learn Teamwork and Collaboration</h4>
                        <p>
                        Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.  
                        </p>
                    </div>
                    <div>
                        <h4>Real World Project Development</h4>
                        <p>
                        Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.  
                        </p>
                    </div>
                    <div>
                        <h4>Build Solid Foundations</h4>
                        <p>
                        Successful Careers depend on a solid mastery of the fundamentals. Build a solid foundations on the essential programming skills and knowledge.  
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;