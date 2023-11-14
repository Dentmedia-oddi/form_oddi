import './diagnostico.css'
import dataOptions from '../../dataBtn.json'
import { useState } from 'react';

import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
import { DropdownOptions } from '../../components/Dropdown/Dropdown';
import { Buttonoptions } from '../../components/Button/Buttonoptions';
import { TipoEndodoncia } from '../TipoDeEndodoncia/TipoEndodoncia';

export function Diagnostico (props) {
  const [diagnosticoSwitch, setDiagnosticoSwitch] = useState(props.switch);
  const [diagnostico, setDiagnostico] = useState({})
  const [diagnosticoConductos, setDiagnosticoConductos] = useState({})

  const handleSwitchDiagnostico = () => {
    setDiagnosticoSwitch(!diagnosticoSwitch);
  }
  
  const handleDiagnostico = (name, value) => {
    setDiagnostico((prevDiagnostico) => ({
      ...prevDiagnostico,
      [name]: value,
    }));

    props.tohandle({
      ...diagnostico,
      [name]: value,
    });
  };

  const handleConductosDiagnostico = (name, value, conductoNro) => {
    setDiagnosticoConductos((prevDiagnosticoConductos) => ({
      ...prevDiagnosticoConductos,
      [conductoNro]: {
        ...prevDiagnosticoConductos[conductoNro],
        [name]: value,
      },
    }));
    props.tohandleConductos(name, value, conductoNro);
  }

  const dropdownDiagnosticoOptionsData = dataOptions.find(
    (option) => option.type === "diagnosticoDropdowns"
  ).data;
  return (
    <div className='diagnosticoMainContainer'>
      <div className='diagnosticoTitleContainer'>
        <h1 className='diagnosticoTitle'>Diagnostico:</h1>
        <ButtonSwitch
          switchState={props.switch}
          toHandle={handleSwitchDiagnostico}
        />
      </div>
      <div className={diagnosticoSwitch ? 'diagnosticoInputs' : "notShowDiagnostico"}>
        <div className='btnsDiagnosticoContainer'>
          {
            dataOptions.filter((option) => option.type === "diagnosticoBtn"
            ).map(btn => (
              <Buttonoptions
                key={btn.id}
                id = {btn.id}
                option = {btn.name}
                value = {btn.name}
                toHandle = {handleDiagnostico}
              />
            ))
          }
        </div>
        <div className='dropdownsDiagnosticoContainer'>
          {dropdownDiagnosticoOptionsData.slice(0,2).map((dropdownopt) => (
            <DropdownOptions
            key={dropdownopt.title}
            data={dropdownopt}
            tohandle={handleDiagnostico}
          />
          ))
          }
          {
            diagnostico.Pulpitis == "irreversible" ? 
            dropdownDiagnosticoOptionsData.slice(2, 4).map((dropdownopt) => (
              <DropdownOptions
              key={dropdownopt.title}
              data={dropdownopt}
              tohandle={handleDiagnostico}
            />
            )) : ''
          }
        </div>
        <div className='btnsDiagnosticoContainerPronos'>
          <h1 className='btnTitleDiagnostico'>Pronostico: </h1>
          {
            dataOptions.filter((option) => option.type === "diagnosticoBtnPronostico"
            ).map(btn => (
              <Buttonoptions
                key={btn.id}
                id = {btn.id}
                option = {btn.name}
                value = {btn.name}
                toHandle = {handleDiagnostico}
              />
            ))
          }
        </div>
        <div className='tipoEndodonciaContainer'>
          <TipoEndodoncia
            isSano = {diagnostico.Sano}
            tohandleConductos={handleConductosDiagnostico}
            tohandleNroConductos={handleDiagnostico}
          />
        </div>
      </div>
    </div>
  )
}