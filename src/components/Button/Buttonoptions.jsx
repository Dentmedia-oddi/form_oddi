import { useState } from "react";
import "./buttonoptions.css";


export function Buttonoptions(props) {
  const [btnIsSelect, setBtnIsSelect] = useState(false);

	const handleClickbtnOptions = () => {
		setBtnIsSelect(!btnIsSelect)
		props.toHandle(props.value, !btnIsSelect);
	}
  return (
    <button
      className={`btnOptionsContainer
      ${btnIsSelect ? `btnSelected` : `btnNotSelect`}`}
			onClick={handleClickbtnOptions}
			value={props.id}
    >
      {props.option}
    </button>
  );
}

export function ButtonsMedicacion(props) {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleClickBtn = (id, type, name) => {
    if (id == selectedBtn) {
      setSelectedBtn(null)
      props.tohandle(type, null);

    }else {
      setSelectedBtn(id);
      props.tohandle(type, name);
    }
  };

  return (
    <div className="btnMedicacionMainContainer">
      <button
        className={`btnOptionsContainer ${selectedBtn === props.data[0].id ? "btnSelected" : "btnNotSelect"}`}
        onClick={() => handleClickBtn(props.data[0].id, props.data[0].type, props.data[0].name)}
        value={props.data[0].id}
      >
        {props.data[0].name}
      </button>
      <button
        className={`btnOptionsContainer ${selectedBtn === props.data[1].id ? "btnSelected" : "btnNotSelect"}`}
        onClick={() => handleClickBtn(props.data[1].id, props.data[1].type, props.data[1].name)}
        value={props.data[1].id}
      >
        {props.data[1].name}
      </button>
    </div>
  );
}
