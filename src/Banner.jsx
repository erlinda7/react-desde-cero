import React from "react";

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png"
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p> Tu futuro te esta esperando</p>
          <a href="#" className="button">
            Suscribirse
          </a>
        </div>
      </div>
    </div>
  </div>
);


export default Banner;