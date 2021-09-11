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
      <List.Item>
        <div id={`item-${item.id}`} key={item.id}>
          <h2 id="name">{item.name}</h2>
          <h2 id="range">{item.range}</h2>
          <p id="description">{item.description}</p>
        </div>
      </List.Item>
    );
  });
  return (
    <Container>
      <List celled>{itemList}</List>
    </Container>
  );
};

export default CurriculumVitae;
