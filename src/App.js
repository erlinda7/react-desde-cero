import React from 'react';
import "./styles/styles.scss";
import Course from './Course';
import Banner from './Banner'
import Formulario from './Formualrio'
import CourseGrid from './CourseGrid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './MainMenu';
import Historial from './Historial';



const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" exact component={Course} />
      <Route path="/cursos" exact component={CourseGrid} />
      <Route path="/historial/:valor" exact component={Historial} />
      <Route path="/historial" exact component={Historial} />
      <Route path="/formulario" exact component={() => <Formulario name="Pagina de contacto" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )} /> </Switch>

    {/* sino le damos path directamente se muestra el componente que le pasamos */}
  </Router>
)
export default App;
