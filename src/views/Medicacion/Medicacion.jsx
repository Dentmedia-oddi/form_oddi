import "./medicacion.css";
import dataOptions from "../../dataBtn.json";
import { useState } from "react";

import { ButtonSwitch } from "../../components/ButtonSwitch/ButtonSwitch";
import { DropdownOptions } from "../../components/Dropdown/Dropdown";
import { ButtonsMedicacion } from "../../components/Button/Buttonoptions";
import { FloatingLabelsInput } from "../../components/FloatingLabels/FloatingLabels";

export function Medicacion(props) {
  const [medicacionSwitch, setMedicacionSwitch] = useState(props.switch);
  const [medicacion, setMedicacion] = useState({});

  const handleSwitchMedicacion = () => {
    setMedicacionSwitch(!medicacionSwitch);
  };
  const handleMedicacion = (name, value) => {
    if (
      (medicacion.Medicacion === "pretratamiento" || medicacion.Medicacion === "posttratamiento") &&
      value === "entreconsulta"
    ) {
      setMedicacion({ Medicacion: value });
    } else if (
      medicacion.Medicacion === "entreconsulta" &&
      (value === "pretratamiento" || value === "posttratamiento")
    ) {
      setMedicacion({ Medicacion: value });
    } else {
      setMedicacion((prevMedicacion) => ({
        ...prevMedicacion,
        [name]: value,
      }));
    }
  
    props.tohandle({
      ...medicacion,
      [name]: value,
    });
  };
  const dropdownMedicacionOptionsData = dataOptions.find(
    (option) => option.type === "MedicacionDropdowns"
  ).data;

  return (
    <div className="medicacionMainContainer">
      <div className="medicacionTitleContainer">
        <h1 className="titleMedicacion">Medicacion: </h1>
        <ButtonSwitch
          switchState={props.switch}
          toHandle={handleSwitchMedicacion}
        />
      </div>
      <div
        className={medicacionSwitch ? "medicacionInputs" : "notShowMedicacion"}
      >
        <div className="dropdownsMedicacionContainer">
          {dropdownMedicacionOptionsData.map((dropdownopt) => (
            <DropdownOptions
              key={dropdownopt.title}
              data={dropdownopt}
              tohandle={handleMedicacion}
            />
          ))}
        </div>
        <div
          className={
            medicacion.Medicacion == "pretratamiento" ||
            medicacion.Medicacion == "posttramiendo"
              ? "btnsMedicacionContainer"
              : "notShowMedicacion"
          }
        >
          <div className="btnRemediosContainer">
            <div className="amoxicilinaContainer">
              <div className="titleBtnMedicacionContainer">
                <h1 className="remediosTitle">Amoxicilina:</h1>
                <ButtonsMedicacion
                  data={dataOptions.filter((opt) => opt.type == "amoxicilina")}
                  tohandle={handleMedicacion}
                />
              </div>
              <div className="medicamentoHoras">
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Cada</h1>
                <FloatingLabelsInput
                  placeholder="horas"
                  type="number"
                  name="HorasAmoxicilina"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">horas</h1>
              </div>
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Por</h1>
                <FloatingLabelsInput
                  placeholder="dias"
                  type="number"
                  name="DiasAmoxicilina"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">dias</h1>
              </div>
            </div>
            </div>
            <div className="amoxicilinaContainer">
              <div className="titleBtnMedicacionContainer">
                <h1 className="remediosTitle">Ibuprofeno:</h1>
                <ButtonsMedicacion
                  data={dataOptions.filter((opt) => opt.type == "ibuprofeno")}
                  tohandle={handleMedicacion}
                />
              </div>
              <div className="medicamentoHoras">
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Cada</h1>
                <FloatingLabelsInput
                  placeholder="horas"
                  type="number"
                  name="HorasIbuprofeno"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">horas</h1>
              </div>
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Por</h1>
                <FloatingLabelsInput
                  placeholder="dias"
                  type="number"
                  name="DiasIbuprofeno"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">dias</h1>
              </div>
            </div>
            </div>
          </div>
          <div className="otroMedicamentoContainer">
            <div className="otroMedicamentoChildContainer">
              <div className="OtroMedicamento">
                <FloatingLabelsInput
                  placeholder="Otro:"
                  type="text"
                  name="OtroMedicamento"
                  tohandle={handleMedicacion}
                />
              </div>
              <div className="otroMedicamentomg">
                <FloatingLabelsInput
                  placeholder="mg:"
                  type="number"
                  name="Otromg"
                  tohandle={handleMedicacion}
                />
              </div>
            </div>
            <div className="medicamentoHoras">
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Cada</h1>
                <FloatingLabelsInput
                  placeholder="horas"
                  type="number"
                  name="HorasOtraMedicacion"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">horas</h1>
              </div>
              <div className="OtroMedicamentoHorasDias">
                <h1 className="horasTitle">Por</h1>
                <FloatingLabelsInput
                  placeholder="dias"
                  type="number"
                  name="DiasOtraMedicacion"
                  tohandle={handleMedicacion}
                />
                <h1 className="horasTitle">dias</h1>
              </div>
            </div>
          </div>
        </div>
          <div
            className={
              medicacion.Medicacion == "entreconsulta"
                ? "btnsMedicacionContainer"
                : "notShowMedicacion"
            }
          >
            <div className="entreconsultaBtnContainer">
              <ButtonsMedicacion
                data={dataOptions.filter((opt) => opt.type == "entreconsultabtn")}
                tohandle={handleMedicacion}
              />
              <div className="EntreConsultaHorasDias">
                <h1 className="horasTitle">Volver en:</h1>
                <div className="labelInputEntreConsulta">
                  <FloatingLabelsInput
                    placeholder="dias"
                    type="number"
                    name="diasOtraConsulta"
                    tohandle={handleMedicacion}
                  />
                </div>
                <h1 className="horasTitle">dias</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
