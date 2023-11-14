import './restauracion.css'
import dataOptions from '../../dataBtn.json'

import { Buttonoptions } from '../../components/Button/Buttonoptions'
import { FloatingLabelsInput } from '../../components/FloatingLabels/FloatingLabels'
import { DropdownOptions } from '../../components/Dropdown/Dropdown'
import { useState } from 'react'

function Restauracion(props) {

  const [restauracion, setRestauracion] = useState({});

  const handleRestauracion = (name, value) => {
    setRestauracion((prevRestauracion) => ({
      ...prevRestauracion,
        [name]: value,
    }))
    props.tohandle(name, value)
  }
  const dropdownAnestesiaData = dataOptions.find(
    (option) => option.type === "AnestesiaDropdowns"
  ).data; 
  return (
    <div className='restauracionMainContainer'>
      <h1 className='titleRestauracion'>Restauracion:</h1>
      <div className='btnsRestauracionContainer'>
        {
          dataOptions.filter((option) => option.type === "restauracionbtn"
          ).map(btn => (
            <Buttonoptions
              key={btn.id}
              id = {btn.id}
              option = {btn.name}
              value = {btn.name}
              toHandle = {handleRestauracion}
            />
          ))
        }
        <FloatingLabelsInput
            placeholder='Otro'
            type='text'
            name='OtroRestauracion'
            tohandle={handleRestauracion}
        />
      </div>
      <div className='dropdownsRestauracion'>
        {dropdownAnestesiaData.map((dropdownopt) => (
          <DropdownOptions
            key={dropdownopt.title} 
            data={dropdownopt}
            tohandle={handleRestauracion} 
          />
        ))}
        {
          dataOptions.filter((option) => option.type === "epinefrinabtn"
          ).map(btn => (
            <Buttonoptions
              key={btn.id}
              id = {btn.id}
              option = {btn.name}
              value = {btn.name}
              toHandle = {handleRestauracion}
            />
          ))
        }
        <FloatingLabelsInput
            placeholder='Nro. de carpules'
            type='number'
            name='nroCarpules'
            tohandle={handleRestauracion}
        />
      </div>
    </div>
  )
}

export default Restauracion