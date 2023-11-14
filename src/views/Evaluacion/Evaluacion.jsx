import './evaluacion.css';
import dataOptions from '../../dataBtn.json'
import { useState } from 'react';

import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
import { DropdownOptions } from '../../components/Dropdown/Dropdown';
import { Buttonoptions } from '../../components/Button/Buttonoptions';

export function Evaluacion (props) { 

  const [evaluacionSwitch, setEvaluacionSwitch] = useState(props.switch);
  const [evaluacion, setEvaluacion] =  useState({})

  const handleSwitchEvaluacion = () => {
    setEvaluacionSwitch(!evaluacionSwitch);
  }
  const handleEvaluacion = (name, value) => {
    setEvaluacion({
      ...evaluacion,
      [name]: value,
    });
    props.tohandle({
      ...evaluacion,
      [name]: value,
    })
  }
  const dropdownOptionsData = dataOptions.find(
    (option) => option.type === "evaluacionDropdowns"
  ).data;  
  return (
    <div className='evaluacionMainContainer'>
      <div className='evaluacionTitleContainer'>
        <h1 className='titleEvaluacion'>Evaluacion:</h1>
        <ButtonSwitch
          switchState={props.switch}
          toHandle={handleSwitchEvaluacion}
        />
      </div>
      <div className={evaluacionSwitch ? 'evaluacionInputs' : 'notShowEvaluacion'}>
          <div className='dropdownsEvaluacionContainer'>
            {dropdownOptionsData.map((dropdownopt) => (
              <DropdownOptions
                key={dropdownopt.title} // Agregar una clave única para cada componente
                data={dropdownopt}
                tohandle={handleEvaluacion} // Pasar la función de manejo como prop
              />
            ))}
          </div>
          <div className='btnsEvaluacionContainer'>
            {
              dataOptions.filter((option) => option.type === "evaluacionBtn"
              ).map(btn => (
                <Buttonoptions
                  key={btn.id}
                  id = {btn.id}
                  option = {btn.name}
                  value = {btn.name}
                  toHandle = {handleEvaluacion}
                />
              ))
            }
          </div>
      </div>
    </div>
  )
}