import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import VideoCategories from "../../assets/scss/components/video/VideoCategories";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
type Props = {};

export default function Categories({}: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="categories-wrapper">
      <div className="container">
        {/* -------------------------banner ------------------------------------ */}
        <div className="categories-banner-wrapper">
          <div className="banner-inner">
            <div className="banner-content">
              <div className="banner-content_title">
                <h3>Writing & Translation</h3>
              </div>
              <div className="banner-content_body">
                Get your words across—in any language.
              </div>
              <div className="banner-button-video">
                <Button
                  className="modal-btn"
                  variant="none"
                  onClick={handleShow}
                >
                  {" "}
                  How Fiver Business Works
                </Button>
                <Modal
                  className="modal-show modal-xl  text-center"
                  show={show}
                  onHide={handleClose}
                >
                  <VideoCategories />
                </Modal>
              </div>
            </div>
          </div>
          <div className="controls-wrapper"></div>
        </div>
        {/* ---------------------------carousel--------------------------------- */}
        <div className="carousel-section">
          <div className="vertical-carousel-wrapper">
            <div className="controls-wrapper">
              <h2>Most popular in Graphics & Design</h2>
            </div>
            <div className="slides-list">
              <a href="#" className="slide-item">
                <div>
                  <img src="/img/slidesCate/item-cr6.webp" alt="cate1" />
                </div>
                <div className="item-center">
                  <span>Minimallist Logo Design</span>
                </div>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
              <a href="#" className="slide-item">
                <div>
                  <img src="/img/slidesCate/item-cr7.webp" alt="cate1" />
                </div>
                <div className="item-center">
                  <span>Architecture & Interior Design</span>
                </div>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
              <a href="#" className="slide-item">
                <div>
                  <img src="/img/slidesCate/item-cr8.webp" alt="cate1" />
                </div>
                <div className="item-center">
                  <span>Image Editing</span>
                </div>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
              <a href="#" className="slide-item">
                <div>
                  <img src="/img/slidesCate/item-cr1.webp" alt="cate1" />
                </div>
                <div className="item-center">
                  <span>Video & Animation</span>
                </div>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* -----------------------list product--------------------------------- */}
        <div className="cate-list_product">
          <h2>Explore Graphics & Design</h2>
          <article className="list-product">
            <div className="card-item">
              <div className="card-image">
                <img src="/img/product1.webp" alt="" />
              </div>
              <div className="card-name">Logo & Brand Identity</div>
              <div className="card-title">
                <p className="card-title_name">Logo Design edit</p>
                <p className="card-title_name">App Design</p>
                <p className="card-title_name">Email Design</p>
                <p className="card-title_name">Social Media Design</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card-image">
                <img src="/img/product1.webp" alt="" />
              </div>
              <div className="card-name">Logo & Brand Identity</div>
              <div className="card-title">
                <p className="card-title_name">Logo Design edit</p>
                <p className="card-title_name">App Design</p>
                <p className="card-title_name">Email Design</p>
                <p className="card-title_name">Social Media Design</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card-image">
                <img src="/img/product1.webp" alt="" />
              </div>
              <div className="card-name">Logo & Brand Identity</div>
              <div className="card-title">
                <p className="card-title_name">Logo Design edit</p>
                <p className="card-title_name">App Design</p>
                <p className="card-title_name">Email Design</p>
                <p className="card-title_name">Social Media Design</p>
              </div>
            </div>{" "}
            <div className="card-item">
              <div className="card-image">
                <img src="/img/product1.webp" alt="" />
              </div>
              <div className="card-name">Logo & Brand Identity</div>
              <div className="card-title">
                <p className="card-title_name">Logo Design edit</p>
                <p className="card-title_name">App Design</p>
                <p className="card-title_name">Email Design</p>
                <p className="card-title_name">Social Media Design</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card-image">
                <img src="/img/product1.webp" alt="" />
              </div>
              <div className="card-name">Logo & Brand Identity</div>
              <div className="card-title">
                <p className="card-title_name">Logo Design edit</p>
                <p className="card-title_name">App Design</p>
                <p className="card-title_name">Email Design</p>
                <p className="card-title_name">Social Media Design</p>
              </div>
            </div>
          </article>
        </div>
        {/* -----------------------list new & hot ------------------  */}
        <div className="list-product-news">
        <h3 className="title fontW_6">Graphics & Design Related Guides</h3>
          <div className="list-product-news-wrapper hover-opc">
            <div className="item-news">
              <div className="card-image">
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg"
                  alt=""
                />
              </div>
              <div className="card-title">
                <h5 className="fontW_6">Graphics & Design Related Guides</h5>
              </div>
            </div>
            <div className="item-news">
              <div className="card-image">
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg"
                  alt=""
                />
              </div>
              <div className="card-title">
                <h5 className="fontW_6">Graphics & Design Related Guides</h5>
              </div>
            </div>
            <div className="item-news">
              <div className="card-image">
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg"
                  alt=""
                />
              </div>
              <div className="card-title">
                <h5 className="fontW_6">How to create a YouTube channel, a step-by-step guide</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
