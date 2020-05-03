import React from "react";
import CursoCard from "../Molecules/CourseCard";
import axios from "axios";

class CourseGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://my-json-server.typicode.com/erlinda7/json-db/cursos")
      .then((resp) => {
        this.setState({
          courses: resp.data,
        });
      });
  }

  render() {
    const { courses } = this.state;
    return (
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
  }
}

export default CourseGrid;
