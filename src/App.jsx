import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import { Switch, Route } from "react-router";
import ContactForm from "./Contact";
import CurriculumVitae from "./CurriculumVitae";


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={ContactForm}></Route>
        <Route exact path="/cv" component={CurriculumVitae}></Route>
        <Hello />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
