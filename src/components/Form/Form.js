import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MyForm({ setModalIsOpen }) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [orbital, setOrbital] = useState("");
  const [rotation, setRotation] = useState("");
  const [diameter, setDiameter] = useState("");
  const [climate, setClimate] = useState("");
  const [gravity, setGravity] = useState("");
  const [terrain, setTerrain] = useState("");
  const [surface, setSurface] = useState("");
  const [population, setPopulation] = useState("");

  const submitHandler = (e) => {
    alert(
      `${name} ${orbital} ${rotation} ${diameter} ${climate} ${gravity} ${terrain} ${surface} ${population}`
    );
    setModalIsOpen(false);
    history.push("/");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="NAME"
          required
          value={name}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>ORBITAL PERIOD</Form.Label>
        <Form.Control
          onChange={(e) => setOrbital(e.target.value)}
          type="text"
          placeholder="ORBITAL PERIOD"
          required
          value={orbital}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>ROTATION_PERIOD PERIOD</Form.Label>
        <Form.Control
          onChange={(e) => setRotation(e.target.value)}
          type="text"
          placeholder="rotation period"
          required
          value={rotation}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>DIAMETER</Form.Label>
        <Form.Control
          onChange={(e) => setDiameter(e.target.value)}
          type="text"
          placeholder="DIAMETER"
          required
          value={diameter}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>CLIMATE</Form.Label>
        <Form.Control
          onChange={(e) => setClimate(e.target.value)}
          type="text"
          placeholder="CLIMATE"
          required
          value={climate}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>GRAVITY</Form.Label>
        <Form.Control
          onChange={(e) => setGravity(e.target.value)}
          type="text"
          placeholder="gravity"
          required
          value={gravity}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>TERRAIN</Form.Label>
        <Form.Control
          onChange={(e) => setTerrain(e.target.value)}
          type="text"
          placeholder="TERRAIN"
          required
          value={terrain}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>SURFACE WATER</Form.Label>
        <Form.Control
          onChange={(e) => setSurface(e.target.value)}
          type="text"
          placeholder="SURFACE WATER"
          required
          value={surface}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>POPULATION</Form.Label>
        <Form.Control
          onChange={(e) => setPopulation(e.target.value)}
          type="text"
          placeholder="POPULATION"
          required
          value={population}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
