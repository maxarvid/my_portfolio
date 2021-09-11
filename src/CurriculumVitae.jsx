import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";

const CurriculumVitae = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("./data/cv.json").then((response) => {
      setItems(response.data);
    });
  }, []);

  let itemList = items.map((item) => {
    return (
      <div id={`item-${item.id}`} key={item.id}>
        <h3 id="name">{item.name}</h3>
        <h3 id="range">{item.range}</h3>
        <p id="description">{item.description}</p>
      </div>
    );
  });
  return (
    <Container>
      <List>{itemList}</List>
    </Container>
  );
};

export default CurriculumVitae;
