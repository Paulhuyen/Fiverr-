import React, { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { videoTestimonials } from "../../data/dataTestimonials";
import Videotestimonial1 from "../../assets/scss/components/video/Videotestimonial1";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
interface DataSlider {
  id: number,
  title: string,
  logo: string,
  textContent: string,
  linkImg : string,
  linkUrl: string,

}
export default function Slidertestimonials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderDataTestimonials = () => {
    return videoTestimonials.map((item:DataSlider, index:number )=>{
      return (
        <div className="testimonials-wrapper" key={index} >
        <div className="row" >
          <div  className="video-modal col-lg-5 col-12">
            <img src={item.linkImg} alt="" />
            <button className="btn-play">
              {/* <img src="/img/play-button.png" alt="" /> */}
              <Button className="modal-btn" variant="none" onClick={handleShow}>
                  <div className="btn-play"><img src="/img/play-button.png" alt="" /></div>
                </Button>
                <Modal  className="modal-show modal-xl  text-center" show={show} onHide={handleClose}>
                  <div className="video-selling"   >
                    <ReactPlayer
                      url='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl'
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={true}
                    />
                  </div>
                </Modal>
            </button>
          </div>
          <div className="text-content col-lg-7 col-12">
            <h5>
              {item.title}  |  {" "}</h5>
              {/* <img src={item.logo}/> */}
            <i className="text-title">
             {item.textContent}
            </i>
          </div>
        </div>
        </div>
      )
    })
  }
  return (
    <div className="testimonials">
      <Slider {...settings}>
      {renderDataTestimonials()}
      </Slider>
    </div>
  );
}
