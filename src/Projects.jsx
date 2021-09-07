import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "My First Website",
      },
      {
        id: 2,
        name: "FizzBuzz",
      },
    ],
  };

  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <h3>{project.name}</h3>
        </div>
      );
    });

    return (
      <Container>
        <h1 id="projects-header">My Projects</h1>
        {projectsList}
      </Container>
    );
  }
}

export default Projects;
