import React from "react";
import './Course.css';
import { Card, Col} from "react-bootstrap";

const Course = (props)=>{
    const {title, img, price} = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height={props.imgHeight}/>
                    <Card.Body>
                        <Card.Title className="fw-bold">{title}</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat et laboriosam rerum debitis, ut natus praesentium excepturi. Aspernatur, aliquam laudantium asperiores incidunt consequuntur beatae totam quisquam et, vel, numquam nisi.
                        </Card.Text>
                        <Card.Text className="fw-bold">
                            Price: <span style={{color: "#3870b3", fontSize:"1.3em"}}>${price}</span>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Col>
    );
}

export default Course;