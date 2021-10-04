import React from "react";
import { Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import MyCarousel from "../Carousel/Carousel";
import Course from "../Course/Course";
import './Home.css';

const Home = () =>{

    const imgHeight = 300;
    const [courses] = useCourses();

    return (
        <>
             {/* banner section */}
            <div className="banner-bg d-flex align-items-center">
                <div className="banner text-center container">
                    <h1>LEARN FROM THE BEST</h1>
                    <h3>Go ahead, improve your skill your skill with Tech Learning Pathshala</h3>
                    <h5 className="px-5">Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses. </h5>
                </div>
            </div>

            <MyCarousel></MyCarousel>
            
            {/* courses section */}
            <div className="container">
            <Row xs={1} md={2} className="g-md-5 p-md-5">
            {
                courses.slice(0,4).map(course => <Course key={course.id} course={course} imgHeight={imgHeight}></Course>)
            }
            </Row>
            </div>
        </>
    );
}

export default Home;