import React from "react";
import { useSelector } from "react-redux";
import "./PlanetsStyles.css";

function PlanetsDetails() {
  const planetsDetailsReducer = useSelector((state) => {
    return state.planetsDetailsReducer;
  });
  return (
    <div className="planets_details">
      <h1>details</h1>
      <p>name - {planetsDetailsReducer.name}</p>
      <p>rotation_period - {planetsDetailsReducer.rotation_period}</p>
      <p>orbital_period - {planetsDetailsReducer.orbital_period}</p>
      <p>diameter - {planetsDetailsReducer.diameter}</p>
      <p>climate - {planetsDetailsReducer.climate}</p>
      <p>gravity - {planetsDetailsReducer.gravity}</p>
      <p>terrain - {planetsDetailsReducer.terrain}</p>
      <p>surface_water - {planetsDetailsReducer.surface_water}</p>
    </div>
  );
}

export default PlanetsDetails;
