import React from "react";

import CursoCard from "../Molecules/CourseCard";
import withLoader from "../HOC/withLoader";

const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-4">
    {courses.map((c) => (
      <CursoCard
        key={c.id}
        id={c.id}
        title={c.title}
        image={c.image}
        price={c.price}
        professor={c.profesor}
      />
    ))}
  </div>
);
export default withLoader("courses", CourseGrid);
