import './datospaciente.css'

import { FloatingLabelsInput } from '../../components/FloatingLabels/FloatingLabels';
import { ButtonSwitch } from '../../components/ButtonSwitch/ButtonSwitch';
import {  useState } from 'react';

export function DatosPaciente (props) {

  const [datospacienteSwitch, setDatosPacienteSwitch] = useState(props.switch)
  const [datosPaciente, setDatosPaciente] = useState({})
  
  const handleSwichDatosPaciente = (check) =>{
    setDatosPacienteSwitch(check)
  }
  const handleInputChangeDatosPaciente = (name, value) => {
    setDatosPaciente({
      ...datosPaciente,
      [name]: value,
    });
    props.tohandle({
      ...datosPaciente,
      [name]: value,
    });
  };
  return (
    <div className='datosPacienteContainer'>
      <div className='datosPacienteTitleContainer'>
        <h1 className='datosPacienteTitle'>Datos Paciente/Dr:</h1>
        <ButtonSwitch
          toHandle= {handleSwichDatosPaciente}
          switchState={props.switch}
        />
      </div>
      <div className={datospacienteSwitch ? 'datosPacienteInputs' : 'notShowDatosPaciente'}>
        <FloatingLabelsInput
          placeholder='Paciente'
          type='text'
          name= 'paciente'
          tohandle={handleInputChangeDatosPaciente}
        />
        <FloatingLabelsInput
          placeholder='Doctor'
          type='text'
          name='doctor'
          tohandle={handleInputChangeDatosPaciente}
        />
        <div className='datosPacienteAgePD'>
          <div className='datosPacientesAgePDLabels'>  
            <FloatingLabelsInput
              placeholder='Edad'
              type='number'
              name='edad'
              tohandle={handleInputChangeDatosPaciente}
            />

          </div>
          <div className='datosPacientesAgePDLabels'>  
            <FloatingLabelsInput
              placeholder='Pieza Dental'
              type='text'
              name='PD'
              tohandle={handleInputChangeDatosPaciente}
            />
          </div>
        </div>
        <FloatingLabelsInput
          placeholder="Motivo de consulta"
          type="text"
          name="consulta"
          tohandle={handleInputChangeDatosPaciente}
        />
      </div>
    </div>
  )
}