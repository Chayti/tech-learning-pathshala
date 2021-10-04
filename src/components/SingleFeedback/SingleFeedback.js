import React from "react";

const SingleFeedback =(props)=>{
    const {name, img, fdescribe} = props.feedback;
    return(
        <div className="bg-color d-md-flex my-3 p-3">
                <div>
                    <img src={img} height="150" alt=""/>
                    <h5 className="fw-bold text-center">{name}</h5>
                </div>
                <div className="ps-3">
                    <p>{fdescribe}</p>
                </div>
            </div>
    );
}

export default SingleFeedback;