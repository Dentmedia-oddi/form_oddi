import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './floatinglabels.css'
import { useState } from 'react';

export function FloatingLabelsInput (props) {



  const handleInputsLabels = (e) => {
    props.tohandle(props.name, e.target.value)
  }

  return (
    <FloatingLabel
        controlId="floatingInput"
        label={props.placeholder}
        className="mb-3 floating-label"
        
      > 
        <Form.Control 
          type={props.type} 
          placeholder="name@example.com" 
          max={props.type == "number"? props.max : ''} 
          min={0}
          name={props.name}
          onChange={handleInputsLabels}
        />
    </FloatingLabel>
  )
}