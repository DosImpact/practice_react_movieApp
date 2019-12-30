import React from "react";
import Proptypes from "prop-types";

function Person({ id, name, image }) {
  return (
    <div>
      <h1>name : {name}</h1>
      <img src={image} alt={name}></img>
    </div>
  );
}
Person.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  hola: Proptypes.string.isRequired
};
export default Person;
