import Accordion from 'react-bootstrap/Accordion';
import './accordion.css'
import { useState } from 'react';


import { FloatingLabelsInput } from '../FloatingLabels/FloatingLabels';
import { Buttonoptions } from '../Button/Buttonoptions';

export function AccordionConductos (props) {
  const [mecanizada, setMecanizada] = useState({});

  const handleMecanizada = (name, value) => {
    setMecanizada((prevMecanicazada) => ({
      ...prevMecanicazada,
      [name]: value,
    }));
    props.tohandle(name, value, props.numConducto);
  };
  // console.log(mecanicazada);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{`Conducto Nro: ${props.numConducto}`}</Accordion.Header>
        <Accordion.Body>
          <FloatingLabelsInput 
            placeholder = "Conducto Radicular"
            type = "text"
            name = "ConductoRadicular"
            tohandle = {handleMecanizada}
            />
          <FloatingLabelsInput 
            placeholder = "Punto de referencia"
            type = "text"
            name = "PuntoReferencia"
            tohandle = {handleMecanizada}
          />
          <div className='taperContainer mb-3'>
            <h1 className='titleTaper'>Taper:</h1>
            <Buttonoptions
              option = {0.02}
              id = "taper002"
              value = "taper002"
              toHandle = {handleMecanizada}
            />
            <Buttonoptions
              option = {0.04}
              id = "taper004"
              value = "taper004"
              toHandle = {handleMecanizada}
            />
            <Buttonoptions
              option = {0.06}
              id = "taper006"
              value = "taper006"
              toHandle = {handleMecanizada}
            />
          </div>
          <FloatingLabelsInput 
            placeholder = "Sistema"
            type = "text"
            name = "Sistema"
            tohandle = {handleMecanizada}
            />
          <FloatingLabelsInput 
            placeholder = "Gutapercha"
            type = "text"
            name = "Gutapercha"
            tohandle = {handleMecanizada}
            />
          <FloatingLabelsInput 
            placeholder = "Longitud"
            type = "number"
            name = "LongGutapercha"
            tohandle = {handleMecanizada}
            />
          <FloatingLabelsInput 
            placeholder = "Logitud final"
            type = "number"
            name = "LongFinal"
            tohandle = {handleMecanizada}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
