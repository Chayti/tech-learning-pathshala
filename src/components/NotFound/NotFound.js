import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import './NotFound.css';

const NotFound = () =>{

    const history = useHistory();

    const handleClick = () =>{
        history.push("/home");
    }

    return (
        <div className="container">
            <div className="not-found-bg"></div>
            <div className="text-center">
                <h2 className="fw-bold">Oops!!! The page you are requesting is not found!</h2>
                <Button onClick={handleClick} variant="outline-warning">Back to HOME</Button>
            </div>
        </div>
    );
}

export default NotFound;