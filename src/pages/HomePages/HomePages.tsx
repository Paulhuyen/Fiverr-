import React, { Fragment, useState } from "react";
import CrouselSlider from "../../components/Carousel-slider/CrouselSlider";
import Sliders from "../../components/Sliders/Sliders";
import {CheckCircleOutlined  } from "@ant-design/icons";
import Slidertestimonials from "../../components/Slider-testimonials/Slidertestimonials";
import VideoModal from "../../assets/scss/components/video/VideoModal";

type Props = {};

export default function HomePages({}: Props) {
  // const [state, setState] = useState({
  //   value: 0
  // });
  // const onNext = () => {
  //   setState({ ...state, value: state.value + 1 });
  // };
  // const onPrevious = () => {
  //   setState({ ...state, value: state.value - 1 });
  // };
  return (
    <>
    <div className="carousel__fiverr">
      <div className="carousel-slider">
        <CrouselSlider />
      </div>
      <div className="crousel-content-fiverr container">
        <div className="carousel-content">
          <div className="header-content  container row">
            <div className="header-content-left col-12 col-lg-7 col-xl-6">         
              <h1>
                Find the perfect <span className="span-title">freelance</span> services for your business
              </h1>
              <div className="header-search-fiverr">
                <form action="" className="form-search-header">
                      <input type="text" className="search-input" placeholder='Try "building mobile app " '/>
                      <button className="search-btn">Search</button>
                </form>
              </div>
              <div className="popular">
                popular: 
                <ul>
                  <li><a href="">Website Design</a></li>
                  <li><a href="">WordPress</a></li>
                  <li><a href="">Logo Design</a></li>
                  <li><a href="">Video Editing</a></li>
                </ul>
              </div>
            </div>
            <div className="header-content-right col-12 col-lg-5 col-xl-6"></div>

          </div>
        </div>
      </div>
    </div>
    <div className="trusted-by-wrapper">
      <div className="trusted-by container">
        <span className="trusted-by-text">Trusted by : </span>
        <ul>
          <li><img src="./img/fb.png" alt="" /></li>
          <li><img src="./img/google.png" alt="" /></li>
          <li><img src="./img/netflix.png" alt="" /></li>
          <li><img src="./img/paypal.png" alt="" /></li>
        </ul>
      </div>
    </div>
    <div className="services-slider-wrapper">
      <div className="services-slider container">
      <h2>Popular professional services</h2>
        <Sliders/>
      </div>
    </div>
    <div className="selling-wrapper">
      <div className="selling-inner container ">
        <div className="row">
          <div className="col-12 col-lg-6 selling-left">
            <div className="selling-text">
              <h2 className="fontW_6">A whole world of freelance talent at your fingertips</h2>
              <ul>
                  <li>
                    <h5><span className="icon_selling"><CheckCircleOutlined /> </span> The best for every budget</h5>
                    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                  </li>
                  <li>
                    <h5><span className="icon_selling"><CheckCircleOutlined /> </span>Quality work done quickly</h5>
                    <p>Find the right freelancer to begin working on your project within minutes.</p>
                  </li>
                  <li>
                    <h5><span className="icon_selling"><CheckCircleOutlined /> </span>Protected payments, every time</h5>
                    <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                  </li>
                  <li>
                    <h5><span className="icon_selling"><CheckCircleOutlined /> </span>24/7 support</h5>
                    <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 selling-right">
            <div className="selling-video">
               <img src="/img/selling.png" alt="" />
              <VideoModal/>
              {/* <img src="/img/selling.png" alt="" />
              <button className="btn-play"><img src="/img/play-button.png" alt="" /></button> */}
            </div>
          </div>
          </div>
      </div>
    </div>
    <div className="main-categories-wrapper">
      <div className="main-categories-inner container">
        <h2 className="fontW_6">Explore the marketplace</h2>
        <div className="categories-list">
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/graphics.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Graphics & Design</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/marketing.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Digital Marketing</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/writing-translation.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Writing & Translation</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/video-animation.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Video & Animation</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/music-radio.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Music & Audio</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/programming.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Programming & Tech</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/business.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Business</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/lifestyle.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Lifestyle</p>
            </div>
          </div>
          <div className="item-categories">
            <div className="item-categories_top">            
              <a>
              <img className="icon-categories" src="./img/marketplace/data.svg" alt="" /><br />
               </a>
            </div>
            <div className="item-categories_bottom">
             <p className="item-name">Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-testimonials">
      <div className="container">
        <Slidertestimonials/>
      </div>
    </div>
    </>
  );
}
