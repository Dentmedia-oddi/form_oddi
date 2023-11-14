import "./pruebasvitalidadsection.css";
import { useEffect, useState } from "react";
import dataOptions from "../../dataBtn.json";

// Import Components
import { ButtonsVitalidad } from "../../components/ButtonsVitalidad/ButtonsVitalidad";
import { ButtonSwitch } from "../../components/ButtonSwitch/ButtonSwitch";
import { FloatingLabelsInput } from "../../components/FloatingLabels/FloatingLabels";

export function PruebasVitalidadSection(props) {
	const [vitalidadSwitch, setVitalidadSwitch] = useState(props.switch)
	const [vitalidadInfo, setVitalidadInfo] = useState({})
	const HandleSwitchSection = () => {
		setVitalidadSwitch(!vitalidadSwitch)
	}
	const handleBtnIsSelected = (name, value) => {
		setVitalidadInfo({
			...vitalidadInfo,
			[name]: value
		});
		props.toHandle({
			...vitalidadInfo,
			[name]: value
		});
	}
  return (
		<div className="pruebasVitalidadMainContainer">
			<div className="titleVitalidadContainer">
				<h1 className="titleVitalidad">Pruebas de Vitalidad:</h1>
				<ButtonSwitch
					switchState = {vitalidadSwitch}
					toHandle= {HandleSwitchSection}
				/>
			</div>
			<div className={ vitalidadSwitch ? "btnsVitalidadContainer" : "notShow"}>
			<div className="btnsVitalidad">
				{dataOptions
					.filter((option) => option.type === "pruebasVitalidad")
					.map((opt) => (
						<ButtonsVitalidad 
							key={opt.id} 
							value={opt.id} 
							name={opt.name} 
							toHandle={handleBtnIsSelected}
							/>
							))
						}
			</div>
			<div className="sondajeContainer">
				<FloatingLabelsInput
					placeholder='Sondaje'
					type='text'
					name='sondaje'
					tohandle={handleBtnIsSelected}
				/>
			</div>
			</div>
		</div>
		)
}
