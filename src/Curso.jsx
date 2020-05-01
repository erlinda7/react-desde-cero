import React from "react";

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png"
        alt="poster del curso"
      />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img
                src="https://edteam-media.s3.amazonaws.com/users/thumbnail/f2db2437-1baf-481d-9f3a-04ba848008a7.jpg"
                alt=""
              />
            </div>
          </div>
          <span className="small">Alvaro Felipe</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          $ 20USD
        </a>
      </div>
    </div>
  </article>
);


export default Curso;