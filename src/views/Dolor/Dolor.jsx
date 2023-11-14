import './dolor.css'
import dataOptions from '../../dataBtn.json'
import { useState } from 'react';

import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
import { DropdownOptions } from '../../components/Dropdown/Dropdown';
import { Buttonoptions } from '../../components/Button/Buttonoptions';
import { FloatingLabelsInput } from '../../components/FloatingLabels/FloatingLabels';

export function Dolor (props) {

  const [dolorSwitch, setDolorSwitch] = useState(props.switch);
  const [dolor, setDolor] = useState ({});

  const handleSwitchDolor = () => {
    setDolorSwitch(!dolorSwitch);
  }

  const handleDolor = (name, value) => {
    setDolor({
      ...dolor,
      [name]: value,
    });
    props.tohandle({
      ...dolor,
      [name]: value,
    })
  }
  const dropdownDolorOptionsData = dataOptions.find(
    (option) => option.type === "dolorDropdowns"
  ).data;

  return (
    <div className='dolorMainContainer'>
      <div className='dolorTitleContainer'>
        <h1 className='titleDolor'>Dolor:</h1>
        <ButtonSwitch
          switchState={props.switch}
          toHandle={handleSwitchDolor}
        />
      </div>
      <div className={dolorSwitch ? "dolorInputs" : "notShowDolor"}>
        <div className='dropdownsDolorContainer'>
          {dropdownDolorOptionsData.map((dropdownopt) => (
            <DropdownOptions
            key={dropdownopt.title}
            data={dropdownopt}
            tohandle={handleDolor}
          />
          ))
          }
          <div className='otroDolorContainer'>
            {
              dolor.Tipo == "Otro" ? 
                <FloatingLabelsInput
                  placeholder = "Otro dolor:"
                  type="text"
                  name = "Otro dolor"
                  tohandle = {handleDolor}
                /> : ""
            }
          </div>
        </div>
        <div className='btnsDolorContainer'>
          <h1 className='btnTitle'>Estimulado por:</h1>
          {
            dataOptions.filter((option) => option.type === "dolorBtn"
            ).map(btn => (
              <Buttonoptions
                key={btn.id}
                id = {btn.id}
                option = {btn.name}
                value = {btn.name}
                toHandle = {handleDolor}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}