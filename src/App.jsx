import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboardCopy from 'clipboard-copy';
import textToCopy from "./textToCopy";
import toast, { Toaster } from 'react-hot-toast';
import ModalSurvey from "./components/ModalSurvey/ModalSurvey";


import { DatosPaciente } from "./views/DatosPaciente/Datospaciente";
import { Evaluacion } from "./views/Evaluacion/Evaluacion";
import { Dolor } from "./views/Dolor/Dolor";
import { Estudios } from "./views/Estudios/Estudios";
import { PruebasVitalidadSection } from "./views/Pruebasdevitalidad/pruebasVitalidadSection";
import { Diagnostico } from "./views/Diagnostico/Diagnostico";
import { Medicacion } from "./views/Medicacion/Medicacion";
import ModalPoliticas from "./components/ModalPoliticas/ModalPoliticas";
import Observaciones from "./views/Observaciones/Observaciones";


function App() {

  
  let oddiCounter = parseInt(localStorage.getItem("oddiCounter")) || 0;
  const [openModalSurvey, setOpenModalSurvey] = useState(false)
  const [datosPaciente, setDatosPaciente] = useState({});
  const [evaluacionPaciente, setEvaluacionPaciente] = useState({});
  const [dolorPaciente, setDolorPaciente] = useState({});
  const [estudiosPaciente, setEstudiosPaciente] = useState({});
  const [vitalidadPaciente, setVitalidadPaciente] = useState({});
  const [diagnosticoPaciente, setDiagnosticoPaciente] = useState({});
  const [medicacionPaciente, setMedicacionPaciente] = useState({});
  const [conductosPaciente, setConductosPaciente] = useState({});
  const [observacionesPaciente, setObservacionesPaciente] = useState({});
  
  const handlesDatosPacienteMain = (datos) => {
    setDatosPaciente(datos);
  }
  const handlesEvaluacionPacienteMain = (datos) => {
    setEvaluacionPaciente(datos);
  }
  const handleDolorPacienteMain = (datos) => {
    setDolorPaciente(datos);
  }
  const handleEstudiosPacienteMain = (datos) => {
    setEstudiosPaciente(datos);
  }
  const handleVitalidadPacienteMain = (datos) => {
    setVitalidadPaciente(datos);
  }
  const handleDiagnosticoPacienteMain = (datos) => {
    setDiagnosticoPaciente(datos);
  }
  const handleMedicacionPacienteMain = (datos) => {
    setMedicacionPaciente(datos);
  }
  const handleObservacionesPacienteMain = (name, value) => {
    setObservacionesPaciente({
      ...observacionesPaciente,
      [name]: value,
    });
  }

  useEffect(() => {
    if (parseInt(localStorage.getItem("oddiCounter"))%5 == 0) {
      setOpenModalSurvey(true);
    } else {
      setOpenModalSurvey(false);
    }

  },[])

  const handleDiagnosticoConductosPacienteMain = (name, value, conductoNro) => {
    setConductosPaciente((prevConductosPaciente) => ({
      ...prevConductosPaciente,
      [conductoNro]: {
        ...prevConductosPaciente[conductoNro],
        [name]: value,
      },
    }));
  }

  // console.log(datosPaciente, 
  //   evaluacionPaciente, 
  //   dolorPaciente, 
  //   estudiosPaciente, 
  //   vitalidadPaciente, 
  //   diagnosticoPaciente, 
  //   conductosPaciente,
  //   medicacionPaciente, 
  //   observacionesPaciente);

  function areObjectsEmpty(...objects) {
    for (const obj of objects) {
      if (Object.keys(obj).length > 0) {
        return false; // El objeto no está vacío
      }
    }
    return true; // Todos los objetos están vacíos
  }
  const todosVacios = areObjectsEmpty(
    datosPaciente,
    evaluacionPaciente,
    dolorPaciente,
    estudiosPaciente,
    vitalidadPaciente,
    diagnosticoPaciente,
    medicacionPaciente,
    conductosPaciente,
    observacionesPaciente
  );
    
    const handleCopy = (e) => {
      e.preventDefault();
      if (todosVacios) {
        toast.error('Planilla esta vacia, completar los campos por favor!');
      } else {
        clipboardCopy(textToCopy(datosPaciente, evaluacionPaciente, dolorPaciente, estudiosPaciente, vitalidadPaciente, diagnosticoPaciente, conductosPaciente, medicacionPaciente, observacionesPaciente));
        toast.success('Planilla copiada!');
        oddiCounter = parseInt(localStorage.getItem("oddiCounter")) || 0;
        localStorage.setItem("oddiCounter", oddiCounter + 1)
        if (parseInt(localStorage.getItem("oddiCounter"))%6 == 0) {
          setOpenModalSurvey(true);
        } else {
          setOpenModalSurvey(false);
        }
      }
    };
    
    const cleanFields = () => {
      window.location.reload();
    }
  return (
    <div className="appMainContainer">
      <ModalPoliticas/>
      <ModalSurvey
        openModal={openModalSurvey}
      />
      <div><Toaster/></div>
      <div className="optionsContainerApp">
      <DatosPaciente
        switch={true}
        tohandle={handlesDatosPacienteMain}
      />
      <hr />
      <Evaluacion
        switch={true}
        tohandle={handlesEvaluacionPacienteMain}
      />
      <hr />
      <Dolor
        switch={false}
        tohandle = {handleDolorPacienteMain}
      />
      <hr />
      <Estudios
        switch={false}
        tohandle = {handleEstudiosPacienteMain}
        />
      <hr />
      <PruebasVitalidadSection
        switch={false}
        toHandle={handleVitalidadPacienteMain}
      />
      <hr />
      <Diagnostico
        switch={true}
        tohandle = {handleDiagnosticoPacienteMain}
        tohandleConductos = {handleDiagnosticoConductosPacienteMain}
      />
      <hr />
      <Medicacion
        switch={false}
        tohandle={handleMedicacionPacienteMain}
      />
      <hr />
      <Observaciones
        switch={false}
        tohandle={handleObservacionesPacienteMain}
      />
      <hr />
      <div className="btnCopiarConsultaContainer">
        <button className="btnLimpiarCampos" type='submit' onClick={cleanFields}>Limpiar campos</button>
        <button className="btnCopiarConsulta" type='submit' onClick={handleCopy}>Copiar consulta</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;