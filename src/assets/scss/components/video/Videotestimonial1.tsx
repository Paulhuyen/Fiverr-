import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function Videotestimonial1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button className="modal-btn" variant="none" onClick={handleShow}>
      <div className="btn-play"><img src="/img/play-button.png" alt="" /></div>
      </Button>
      <Modal  className="modal-show modal-xl  text-center" show={show} onHide={handleClose}>
        <div className="video-selling"   >
          <ReactPlayer
            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            width="100%"
            height="100%"
            playing={true}
            controls={true}
          />
        </div>
      </Modal>
    </>
  )
}
