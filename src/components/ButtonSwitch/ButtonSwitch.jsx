import Form from "react-bootstrap/Form";
import "./ButtonSwitch.css";
import { useState } from "react";

export function ButtonSwitch(props) {
  const [isChecked, setIsChecked] = useState(props.switchState);
  const handleSwitch = (e) => {
    setIsChecked(e.target.checked);
    props.toHandle(e.target.checked)
  };
  return (
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        checked={isChecked}
        onChange={handleSwitch}
        className="btnSwitch"
      />
    </div>
  );
}
