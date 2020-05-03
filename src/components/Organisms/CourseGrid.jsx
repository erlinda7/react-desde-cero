import React from "react";

import CursoCard from "../Molecules/CourseCard";

const CourseGrid = ({courses}) => (
  <div className="ed-grid m-grid-4">
    {courses.length === 0 ? (
      <h1 className="t3">Cargando...</h1>
    ) : (
      courses.map((c) => (
        <CursoCard
          key={c.id}
          id={c.id}
          title={c.title}
          image={c.image}
          price={c.price}
          professor={c.profesor}
        />
      ))
    )}
  </div>
);
export default CourseGrid;
