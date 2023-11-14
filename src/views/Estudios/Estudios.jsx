import './estudios.css'
import dataOptions from '../../dataBtn.json'
import { useState } from 'react';

import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
import { Buttonoptions } from '../../components/Button/Buttonoptions';

export function Estudios (props) { 

  const [estudiosSwitch, setEstudiosSwitch] = useState(props.switch);
  const [estudios, setEstudios] = useState({})

  const handleSwitchEstudios = () => {
    setEstudiosSwitch(!estudiosSwitch);
  }

  const handleEstudios = (name, value) => {
    setEstudios({
      ...estudios,
      [name]: value,
    });
    props.tohandle({
      ...estudios,
      [name]: value,
    });
  }
  return (
    <div className='estudiosMainContainer'>
      <div className='estudiosTitleContainer'> 
        <h1 className='titleEstudios'>Estudios:</h1>
        <ButtonSwitch
          switchState={estudiosSwitch}
          toHandle={handleSwitchEstudios}
        />
      </div>
      <div className={estudiosSwitch? 'estudiosInputs' : 'notShowEstudios'}>
        {
          dataOptions.filter((option) => option.type === "estudios"
          ).map(btn => (
            <Buttonoptions
              key={btn.id}
              id = {btn.id}
              option = {btn.name}
              value = {btn.name}
              toHandle = {handleEstudios}
            />
          ))
        }
      </div>
    </div>
  )
}