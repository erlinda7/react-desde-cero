import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, image, price, professor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title ? title : "No hay titulo"}</h3>
      <div className="s-mb-2 s-main-center">{professor}</div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string,
};

CourseCard.defaultProps = {
  title: "No se encontro titulo",
  image:
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480x272/public/media/image/2019/01/default_wallpaper.jpeg?itok=RGGJXij8",
  price: "__",
  profesor: "",
};
export default CourseCard;
