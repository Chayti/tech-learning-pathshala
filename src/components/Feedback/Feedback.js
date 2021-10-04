import React from "react";
import './Feedback.css';

const Feedback = () =>{
    return (
        <>
            <div className="text-center py-5" style={{backgroundColor:"#00b9d1dc"}}>
                 <h1 className="fw-bold text-light">OUR STUDENT'S FEEDBACK</h1>
            </div>
        
        <div style={{height:"40px"}}></div>
         <div className="container feedback">
             
            <div className="bg-color d-md-flex my-3 p-3">
                <div>
                    <img src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg" height="150"/>
                    <h5 className="fw-bold text-center">Ms. Yahiti Sharma</h5>
                </div>
                <div className="ps-3">
                    <p>Before enrolling into this course, I hade zero knowledge about React, and was pretty abysmal in JavaScript. My mentor, who is one of the most humble and friendly instructors I have ever been taught by, with his vast experience, knew exactly how to engage a novice like me into the course, and could inspire me to put my cent percent effort. The topics that are covered in this course are the core concepts of React, which are more than enough for an enthusiast to enter into React jobs. Although I could not put my all-out effort due to my tight work schedule, I am motivated enough to continue my learning to work as a React developer.</p>
                </div>
            </div>
               
            <div className="bg-color d-md-flex my-3 p-3">
                <div>
                    <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" height="150"/>
                    <h5 className="fw-bold text-center">Mr. Rohit Rajan</h5>
                </div>
                <div className="ps-3">
                    <p>This is a very good course for beginners. Maruf Mohajan vai is very well decorated and answers all the questions raised by the students. The course is recommended for students/anyone who wants to start CP but doesn't know how to start. Even if you've started your CP journey, This course will boost you a lot. I'm totally satisfied buying the course!! every student, professionals, or anyone who loves coding or wants to be a good programmer must try this course. </p>
                </div>
            </div>
                
            <div className="bg-color d-md-flex my-3 p-3">
                <div>
                <img src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" height="150"/>
                <h5 className="fw-bold text-center">Mrs. Oindrila Dhar</h5>
                </div>
                <div className="ps-3">
                    <p> It was an amazing experience to learn and understand programming as well as problems. Our instructor Sadman Sakib vai was very friendly to us and always care about every point to improve our analytical abilities. The course was well organized and followed the basic beginner friendly syllabus. From this course one will learn how to solve a problem step by step and improve thinking style and also love programming.</p>
                </div>
            </div>
                
         </div>
         <div style={{height:"30px"}}></div>
        </>
    );
}

export default Feedback;