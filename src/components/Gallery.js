import React from "react";
import "./Gallery.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Gallery = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <Button className="btn1" onClick={handleShow} style={{ Color: "#000" }}>
          Gallery
        </Button>
      </div>
      <Modal dialogClassName="my-modal" show={showModal} onHide={handleClose}>
        <Modal.Body>
          <Modal.Header closeButton style={{ Color: "#000" }}></Modal.Header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/images/1.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            ></a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            ></a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
