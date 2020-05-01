import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso';



const cursos = [
  {
    title: "react desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    price: 30,
    profesor: "Beto Quiroga"
  },
  {
    title: "Drupal desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    price: 50,
    profesor: "Alvaro Felipe"
  },
  {
    title: "Go desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    price: 40,
    profesor: "Juan Quiroga"
  },
  {
    title: "Html desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg",
    price: 10,
    profesor: "robert perez"
  },
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p> Tu futuro te esta esperando</p>
            <a href="#" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map(c =><Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
      }
    </div>


  </>
)
export default App;
