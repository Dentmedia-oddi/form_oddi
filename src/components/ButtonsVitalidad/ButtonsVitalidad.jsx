import { useState } from "react";
import "./buttonsvitalidad.css";

export function ButtonsVitalidad(props) {
  const [isSelected, setIsSelected] = useState(null);

  const handleClickIsSelected = (value) => {
    setIsSelected((prevValue) => (prevValue === value ? null : value));
    props.toHandle(props.value, value);
  };

  return (
    <div className="buttonsVitalidadContainer">
      <h1 className="titleIsSelected">{props.name}</h1>
      <div className="btnsIsSelectedContainer">
        <i
          className={`bi ${isSelected === true ? "bi-plus-circle-fill" : "bi-plus-circle"}`}
          onClick={() => handleClickIsSelected(true)}
        ></i>
        <i
          className={`bi ${isSelected === false ? "bi-dash-circle-fill" : "bi-dash-circle"}`}
          onClick={() => handleClickIsSelected(false)}
        ></i>
      </div>
    </div>
  );
}
