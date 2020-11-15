import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { planetsDetails } from "../../Redux/PlanetsDetailsActions";
import { getStarWarsData } from "../../Redux/GetStarWarsAction";
import Modal from "react-modal";
import MyForm from "../Form/Form";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlanetStyles.css";

Modal.setAppElement("#root");
function Planets() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();
  const getStarWarsReducer = useSelector((state) => state.getStarWarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData());
  }, [dispatch]);

  const detailsHandler = (items) => {
    dispatch(planetsDetails(items));
    history.push("/details");
  };

  return getStarWarsReducer.loading ? (
    <h1>loading...</h1>
  ) : getStarWarsReducer.error ? (
    <h2>{getStarWarsReducer.error}</h2>
  ) : (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter </th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>Actions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {getStarWarsReducer.data &&
          getStarWarsReducer.data.map((items) => {
            return (
              <tr key={items.name}>
                <td>{items.name}</td>
                <td>{items.rotation_period}</td>
                <td>{items.orbital_period}</td>
                <td>{items.diameter}</td>
                <td>{items.climate}</td>
                <td>{items.gravity}</td>
                <td>{items.terrain}</td>
                <td>{items.surface_water}</td>
                <td>
                  <Button size="sm" block onClick={() => detailsHandler(items)}>
                    Planet details
                  </Button>
                  <Button size="sm" block onClick={() => setModalIsOpen(true)}>
                    Form
                  </Button>
                </td>
                <td>
                  {items.films ? (
                    <>
                      <Button block size="sm">
                        Go To film {items.films.length}
                      </Button>
                    </>
                  ) : null}

                  {items.residents ? (
                    <>
                      <Button block size="sm">
                        Go To Residents {items.residents.length}
                      </Button>
                    </>
                  ) : null}
                </td>
              </tr>
            );
          })}
      </tbody>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            width: "600px",
            margin: "10px auto",
          },
        }}
      >
        <MyForm setModalIsOpen={setModalIsOpen} />
      </Modal>
    </table>
  );
}

export default Planets;
