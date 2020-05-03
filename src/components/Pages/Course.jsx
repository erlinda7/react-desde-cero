import React, { useState } from "react";

const Course = ({ match }) => {
  const [state, setState] = useState({
    cursoActual: {
      id: 1,
      title: "react desde cero",
      image:
        "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
      price: 30,
      profesor: "Beto Quiroga",
    },
  });

  console.log(state);
  
  return (
    <div className="ed-grid m-grid-3">
      {state.cursoActual ? (
        <>
          <h1 className="m-cols-3"> {state.cursoActual.titulo} </h1>
          <img
            className="m-cols-1"
            src={state.cursoActual.image}
            alt={state.cursoActual.titulo}
          />
          <p className="m-cols-2">Profesor: {state.cursoActual.profesor} </p>
        </>
      ) : (
        <h1>El curso no existe</h1>
      )}
    </div>
  );
};
export default Course;
