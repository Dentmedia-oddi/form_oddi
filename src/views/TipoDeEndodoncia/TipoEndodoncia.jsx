import './tipoendodoncia.css';
import dataOptions from '../../dataBtn.json'

import { DropdownOptions } from '../../components/Dropdown/Dropdown';
import { FloatingLabelsInput } from "../../components/FloatingLabels/FloatingLabels";
import { useEffect, useState } from 'react';
import { AccordionConductos } from '../../components/Accordion/Accordion';
import Restauracion from '../Restauracion/Restauracion';



export function TipoEndodoncia (props) {

  const [nroConductos, setNroConductos] = useState({});
  const [conductos, setConductos] = useState({});
  const [isSano, setIsSano] = useState(props.isSano)
  // const [nroConductos, setNroConductos] = useState({});
  // const [conductos, setConductos] = useState({});
  // const [isSano, setIsSano] = useState(props.isSano)

  useEffect(() => {
    // Este efecto se ejecutará cada vez que props.isSano cambie
    setIsSano(props.isSano);
  }, [props.isSano]);

  const handleConductos = (name, value, conductoNro) => {
    setConductos((prevNroConductos) => ({
      ...prevNroConductos,
      [conductoNro]: {
        ...prevNroConductos[conductoNro],
        [name]: value,
      },
    }));
    props.tohandleConductos(name, value, conductoNro);
  };
  const handleNroConductos = (name, value) => {
    setNroConductos((prevNroConductos) => ({
      ...prevNroConductos,
        [name]: value,
    }))
    props.tohandleNroConductos(name, value);
  }

  const dropdownOptionsData = dataOptions.find(
    (option) => option.type === "TipoEndodonciaDropdowns"
  ).data;  
  const dropdownTecnicaObturacionData = dataOptions.find(
    (option) => option.type === "tecnicaobturacionDropDowns"
  ).data;  
  const dropdownIrrigacionData = dataOptions.find(
    (option) => option.type === "IrrigacionDropdowns"
  ).data;
  
  return (
    <div className='TipoEndodonciaMainContainer'>
      <div className='headSectionTipoEndodoncia'>
        {dropdownOptionsData.map((dropdownopt) => (
          <DropdownOptions
            key={dropdownopt.title} // Agregar una clave única para cada componente
            data={dropdownopt}
            tohandle={handleNroConductos} // Pasar la función de manejo como prop
            disabled={isSano == true? true : false}
          />
        ))}
        <div className={isSano? "notShowIsSano" : "isSanoContainer"}>
          <div className='nroConductos'>
            <h1 className='titleNroConductos'>Nro. de Conductos:</h1>
            <FloatingLabelsInput
              placeholder='Nro'
              type='number'
              name='nroConducto'
              tohandle={handleNroConductos}
              max = {6}
            />
          </div>
          <div className='accordionsConductoContainer'>
            {Array.from({ length: nroConductos?.nroConducto || 0 }).map((_, index) => (
              <div key={index} className="accordionsConductoContainer">
                <AccordionConductos
                  numConducto={index+1}
                  tohandle={handleConductos}
                />
              </div>
            ))}
          </div>
          <div className='tecnicaIrrigacionContainer'>
            {dropdownTecnicaObturacionData.map((dropdownopt) => (
              <DropdownOptions
                key={dropdownopt.title} 
                data={dropdownopt}
                tohandle={handleNroConductos} 
              />
            ))}
              <div className='concentracionIrrigacion'>
                {dropdownIrrigacionData.map((dropdownopt) => (
                  <DropdownOptions
                    key={dropdownopt.title} 
                    data={dropdownopt}
                    tohandle={handleNroConductos} 
                  />
                ))}
                <FloatingLabelsInput
                  placeholder = "Concentracion (%):"
                  type="text"
                  name = "Concentracion:"
                  tohandle = {handleNroConductos}
                />
              </div>
            <div className='otrosTecnicaIrrigacion'>
              {
                nroConductos.Irrigacion == "Otro" ? 
                  <FloatingLabelsInput
                    placeholder = "Otro irrigacion:"
                    type="text"
                    name = "Otro irrigacion"
                    tohandle = {handleNroConductos}
                  /> : ""
              }
              {
                nroConductos["Tecnica de obturacion"] == "Otro" ? 
                  <FloatingLabelsInput
                    placeholder = "Otro Tec. Obturacion:"
                    type="text"
                    name = "Otro tec. Obturacion"
                    tohandle = {handleNroConductos}
                  /> : ""

              }

            </div>
          <FloatingLabelsInput
            placeholder = "Cemento Sellador:"
            type="text"
            name = "cementoSellador"
            tohandle = {handleNroConductos}
          /> 
          </div>
        </div>
        <Restauracion
          tohandle={handleNroConductos}
        />
      </div>
    </div>
  )
}