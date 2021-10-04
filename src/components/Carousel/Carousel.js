import React from "react";
import { Carousel} from "react-bootstrap";
import './Carousel.css';

const MyCarousel = ()=>{
    return(
        <div>
            <Carousel fade className="text-center my-5">

                <Carousel.Item>
                    <img className="w-50" src="https://www.talentlms.com/blog/wp-content/uploads/2018/03/TLMS_20180307_1200x628.jpg" alt="Third slide"/>
                    <Carousel.Caption className="carousel-title" style={{left:"25%",right:"25%", bottom:"0"}}>
                        <h3 style={{backgroundColor:"white", color:"#00b9d1"}}>We help to sharpen your knowledge</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="w-50" src="https://www.gc-solutions.net/wp-content/uploads/2015/03/Training.jpg" alt="First slide"/>
                    <Carousel.Caption className="carousel-title" style={{left:"25%",right:"25%", bottom:"0"}}>
                        <h3 style={{backgroundColor:"white", color:"#00b9d1"}}>Expert trainer, tons of practices</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{height:"57px"}}></div>
                    <img className="w-50" src="https://buffalo7.co.uk/wp-content/uploads/2019/10/training-presentation-tips.jpg" alt="Second slide"/>
                    <Carousel.Caption className="carousel-title"  style={{left:"25%",right:"25%", bottom:"0"}}>
                        <h3 style={{backgroundColor:"white", color:"#00b9d1"}}>Explore & acquire new knowledge</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                </Carousel>
        </div>
    );
}

export default MyCarousel;