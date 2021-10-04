import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";
import './Courses.css';

const Courses = () =>{
    const imgHeight = 220;
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <>
            <div className="bg mt-3">
                <div style={{height:"40px"}}></div>
                <div className="bg-color container">
                    <Row xs={1} md={3} className="g-3 p-2">
                    {
                        courses.map(course => <Course key={course.id} course={course} imgHeight={imgHeight}></Course>)
                    }
                    </Row>
                </div>
                <div style={{height:"30px"}}></div>
            </div>
            
            <div className="container">
            
            </div>
        </>
    );
}

export default Courses;