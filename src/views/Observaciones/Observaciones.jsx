import { useState } from 'react';
import './observaciones.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
ButtonSwitch

function Observaciones(props) {

  const [observacionesSwitch, setObservacionesSwitch] = useState(props.switch);
  const [observaciones, SetObservaciones] = useState({}); 

  const handleSwitchObservaciones = () => {
    setObservacionesSwitch(!observacionesSwitch);
  }
  const handleInputsObservaciones = (e) => {  
    props.tohandle("Observaciones", e.target.value);
  }

  return (
    <div className='observacionesMainContainer'>
      <div className='observacionesTitleContainer'> 
        <h1 className='titleEstudios'>Observaciones:</h1>
        <ButtonSwitch
          switchState={observacionesSwitch}
          toHandle={handleSwitchObservaciones}
        />
      </div>
      <div className={observacionesSwitch? 'observacionesInputs' : 'notShowObservaciones'}>
        <FloatingLabel controlId="floatingTextarea2" label="Observaciones:">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px', width: '100%' }}
            onChange={handleInputsObservaciones}
          />
        </FloatingLabel>
      </div>
    </div>
  )
}

export default Observaciones