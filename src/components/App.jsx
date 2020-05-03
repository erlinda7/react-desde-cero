import React from 'react';
import "../styles/styles.scss";
import Course from './Pages/Course';
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './Organisms/MainMenu';
import Historial from './Pages/Historial';
import Home from './Pages/Home';
import Users from './Pages/Users';



const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" exact component={Course} />
      <Route path="/cursos" exact component={CourseGrid} />
      <Route path="/historial/:valor" exact component={Historial} />
      <Route path="/historial" exact component={Historial} />
      <Route path="/formulario" exact component={() => <Form name="Pagina de contacto" />} />
      <Route path="/usuarios" exact component={Users} />
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
