import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataImgSlider } from '../../data/dataSlider';
type Props = {
}
interface DataSlider {
  id: number;
  linkImg: string;
  title: string;
  name: string;

}
export default function Sliders({}: Props) {
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
        slidesToShow: 5,
        slidesToScroll: 5,
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
    const renderSlider = () => {
      return dataImgSlider.map((item: DataSlider, index:number)=>{
         return (
          <div className="card-wrapper" key={index}>
          <div className="card-body">
            <div className="card-img">
              <img src={item.linkImg} alt={item.title} />
            </div>
            <div className="card-text">
              <p>{item.title}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        </div>
         )
    })
    }
  return (
      <div className="slider-wrapper container" >
      <Slider {...settings}>
         {renderSlider()}
      </Slider>
      </div>

  

  )
}