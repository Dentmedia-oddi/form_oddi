function textToCopy(datosPaciente, evaluacionPaciente, dolorPaciente, estudiosPaciente, vitalidadPaciente, diagnosticoPaciente, conductosPaciente, medicacionPaciente, observacionesPaciente) {
  const pacienteInfo = Object.keys(datosPaciente).length !== 0
    ? `${datosPaciente.paciente ? `Paciente: ${datosPaciente.paciente}, ` : ""}${datosPaciente.doctor ? `Doctor: ${datosPaciente.doctor}, ` : ""}${datosPaciente.edad ? `Edad: ${datosPaciente.edad} años, ` : ""}${datosPaciente.PD ? `PD: ${datosPaciente.PD}, ` : ""}${datosPaciente.consulta ? `Consulta: ${datosPaciente.consulta}.` : ""}\n`
    : "";
  const evaluacionInfo = Object.keys(evaluacionPaciente).length !== 0
    ? `Evaluacion: ${evaluacionPaciente.Absceso ? `Absceso, ` : ""}${evaluacionPaciente.Caries ? `Caries, ` : ""}${evaluacionPaciente.Discromia ? `Discromia, ` : ""}${evaluacionPaciente["Endodoncia Previa"] ? `Endodoncia Previa: ${evaluacionPaciente["Endodoncia Previa"]}, ` : ""}${evaluacionPaciente["Endodoncia por razon prostetica"] ? `Endodoncia por razon prostetica, ` : ""}${evaluacionPaciente["Estado Apice"] ? `Estado Apice: ${evaluacionPaciente["Estado Apice"]}, ` : ""}${evaluacionPaciente.Fistula ? `Fistula, ` : ""}${evaluacionPaciente.Fractura ? `Fractura: ${evaluacionPaciente.Fractura}, ` : ""}${evaluacionPaciente.Movilidad ? `Movilidad: ${evaluacionPaciente.Movilidad}, ` : ""}${evaluacionPaciente.Fisura ? `Fisura, ` : ""}${evaluacionPaciente.Trauma ? `Trauma, ` : ""}${evaluacionPaciente.Reabsorcion ? `Reabsorcion: ${evaluacionPaciente.Reabsorcion}, ` : ""}\n`
    : "";
  const dolorInfo = Object.keys(dolorPaciente).length !== 0
    ? `Dolor: ${dolorPaciente.Tipo && dolorPaciente.Tipo !== "Otro" ? `Tipo ${dolorPaciente.Tipo}, ` : ""}${dolorPaciente.Intesidad ? `Intensidad ${dolorPaciente.Intesidad}, ` : ""}Estimulado por:${dolorPaciente.Acidos ? `Acidos, ` : ""}${dolorPaciente.Calor ? `Calor, ` : ""}${dolorPaciente.Dulces ? `Dulces, ` : ""}${dolorPaciente.Frio ? `Frio, ` : ""}${dolorPaciente.Masticacion ? `Masticacion, ` : ""}${dolorPaciente.Tipo === "Otro" ? `Otro Dolor: ${dolorPaciente["Otro dolor"]}, ` : ""}\n`
    : "";
  const estudiosInfo = Object.keys(estudiosPaciente).length !== 0
    ? `Estudios:${estudiosPaciente.OPG ? `OPG, ` : ""}${estudiosPaciente["Periapical final"] ? `Periapical Final, ` : ""}${estudiosPaciente["Periapical inicial"] ? `Periapical inicial, ` : ""}${estudiosPaciente.TAC ? `TAC, ` : ""}${estudiosPaciente['RX cono patron'] ? `RX cono patron, ` : ""}`
    : "";
  const vitalidadInfo = Object.keys(vitalidadPaciente).length !== 0
    ? `Estudios de Vitalidad: ${vitalidadPaciente.calor ? `Calor +, ` : `Calor -, `}${vitalidadPaciente.frio ? `Frio +, ` : `Frio -, `}${vitalidadPaciente.palpacion ? `Palpacion +, ` : 'Palpacion -, '}${vitalidadPaciente.presion ? `Presion +, ` : `Presion -`}${vitalidadPaciente['percusion Horizontal'] ? `Percusion Horizontal, ` : ""}${vitalidadPaciente['percusion Vertical'] ? `Percusion Vertical, ` : ""}${vitalidadPaciente.sondaje ? `Sondaje: ${vitalidadPaciente.sondaje}, ` : ""}\n`
    : "";
  const diagnosticoInfo = Object.keys(diagnosticoPaciente).length !== 0
    ? `Diagnostico: ${diagnosticoPaciente.Sano ? `Sano, ` : ``}${diagnosticoPaciente.Necrosis ? `Necrosis, ` : ``}${diagnosticoPaciente.Retratamiento ? `Retratamiento, ` : ''}${diagnosticoPaciente["Periodontitis Apical"] ? `Periodontitis Apical: ${diagnosticoPaciente["Periodontitis Apical"]} , ` : ``}${diagnosticoPaciente.Pulpitis ? `Pulpitis: ${diagnosticoPaciente.Pulpitis}, ` : ""}${diagnosticoPaciente['Irreversible Sintomatica'] ? `Irreversible Sintomatica: ${diagnosticoPaciente['Irreversible Sintomatica']}, ` : ""}${diagnosticoPaciente['Irreversible Asintomatica'] ? `Irreversible Asintomatica: ${diagnosticoPaciente['Irreversible Asintomatica']}, ` : ""}${diagnosticoPaciente.Favorable ? ` Pronostico: Favorable, ` : ""}${diagnosticoPaciente.Reservado ? ` Pronostico: Reservado, ` : ""}${diagnosticoPaciente.Desfavorable ? ` Pronostico: Desfavorable, ` : ""}${diagnosticoPaciente["Tipo de Endodoncia"] ? `Tipo de endodoncia: ${diagnosticoPaciente["Tipo de Endodoncia"]}, ` : ""}\n`
    : "";
    const conducto1 = (conductosPaciente["1"])
    ? `Conducto nro 1: ${conductosPaciente["1"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["1"].ConductoRadicular}, ` : ``}${conductosPaciente["1"].Gutapercha ? `Gutapercha: ${conductosPaciente["1"].Gutapercha}, ` : ``}${conductosPaciente["1"].LongFinal ? `Longitud Final: ${conductosPaciente["1"].LongFinal}, ` : ``}${conductosPaciente["1"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["1"].LongGutapercha}, ` : ``}${conductosPaciente["1"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["1"].PuntoReferencia}, ` : ``}${conductosPaciente["1"].Sistema ? `Sistema: ${conductosPaciente["1"].Sistema}, ` : ``}${conductosPaciente["1"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["1"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["1"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";

  const conducto2 = (conductosPaciente["2"])
    ? `Conducto nro 2: ${conductosPaciente["2"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["2"].ConductoRadicular}, ` : ``}${conductosPaciente["2"].Gutapercha ? `Gutapercha: ${conductosPaciente["2"].Gutapercha}, ` : ``}${conductosPaciente["2"].LongFinal ? `Longitud Final: ${conductosPaciente["2"].LongFinal}, ` : ``}${conductosPaciente["2"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["2"].LongGutapercha}, ` : ``}${conductosPaciente["2"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["2"].PuntoReferencia}, ` : ``}${conductosPaciente["2"].Sistema ? `Sistema: ${conductosPaciente["2"].Sistema}, ` : ``}${conductosPaciente["2"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["2"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["2"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";
  
  const conducto3 = (conductosPaciente["3"])
    ? `Conducto nro 3: ${conductosPaciente["3"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["3"].ConductoRadicular}, ` : ``}${conductosPaciente["3"].Gutapercha ? `Gutapercha: ${conductosPaciente["3"].Gutapercha}, ` : ``}${conductosPaciente["3"].LongFinal ? `Longitud Final: ${conductosPaciente["3"].LongFinal}, ` : ``}${conductosPaciente["3"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["3"].LongGutapercha}, ` : ``}${conductosPaciente["3"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["3"].PuntoReferencia}, ` : ``}${conductosPaciente["3"].Sistema ? `Sistema: ${conductosPaciente["3"].Sistema}, ` : ``}${conductosPaciente["3"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["3"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["3"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";
  
  const conducto4 = (conductosPaciente["4"])
    ? `Conducto nro 4: ${conductosPaciente["4"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["4"].ConductoRadicular}, ` : ``}${conductosPaciente["4"].Gutapercha ? `Gutapercha: ${conductosPaciente["4"].Gutapercha}, ` : ``}${conductosPaciente["4"].LongFinal ? `Longitud Final: ${conductosPaciente["4"].LongFinal}, ` : ``}${conductosPaciente["4"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["4"].LongGutapercha}, ` : ``}${conductosPaciente["4"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["4"].PuntoReferencia}, ` : ``}${conductosPaciente["4"].Sistema ? `Sistema: ${conductosPaciente["4"].Sistema}, ` : ``}${conductosPaciente["4"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["4"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["4"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";
  
  const conducto5 = (conductosPaciente["5"])
    ? `Conducto nro 5: ${conductosPaciente["5"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["5"].ConductoRadicular}, ` : ``}${conductosPaciente["5"].Gutapercha ? `Gutapercha: ${conductosPaciente["5"].Gutapercha}, ` : ``}${conductosPaciente["5"].LongFinal ? `Longitud Final: ${conductosPaciente["5"].LongFinal}, ` : ``}${conductosPaciente["5"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["5"].LongGutapercha}, ` : ``}${conductosPaciente["5"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["5"].PuntoReferencia}, ` : ``}${conductosPaciente["5"].Sistema ? `Sistema: ${conductosPaciente["5"].Sistema}, ` : ``}${conductosPaciente["5"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["5"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["5"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";
  
  const conducto6 = (conductosPaciente["6"])
    ? `Conducto nro 6: ${conductosPaciente["6"].ConductoRadicular ? `Conducto radicular: ${conductosPaciente["6"].ConductoRadicular}, ` : ``}${conductosPaciente["6"].Gutapercha ? `Gutapercha: ${conductosPaciente["6"].Gutapercha}, ` : ``}${conductosPaciente["6"].LongFinal ? `Longitud Final: ${conductosPaciente["6"].LongFinal}, ` : ``}${conductosPaciente["6"].LongGutapercha ? `Longitud Gutapercha: ${conductosPaciente["6"].LongGutapercha}, ` : ``}${conductosPaciente["6"].PuntoReferencia ? `Punto referencia: ${conductosPaciente["6"].PuntoReferencia}, ` : ``}${conductosPaciente["6"].Sistema ? `Sistema: ${conductosPaciente["6"].Sistema}, ` : ``}${conductosPaciente["6"].taper002 ? `Tapper 0.02, ` : ``}${conductosPaciente["6"].taper004 ? `Tapper 0.04, ` : ``}${conductosPaciente["6"].taper006 ? `Tapper 0.06, ` : ``} \n ` 
    : "";

  const tecnicaObturacion = Object.keys(diagnosticoPaciente).length !== 0
    ? `${diagnosticoPaciente["Tecnica de obturacion"] ? `Tecnica de obturacion: ${diagnosticoPaciente["Tecnica de obturacion"]}, `: ``}${diagnosticoPaciente.Irrigacion ? `Irrigacion: ${diagnosticoPaciente.Irrigacion}, `: ``}${diagnosticoPaciente.Concentracion ? `Concentracion: ${diagnosticoPaciente.Concentracion}, `: ``}${diagnosticoPaciente.cementoSellador ? `Cemento: ${diagnosticoPaciente.cementoSellador}, `: ``} \n`
    : "";

  // const restauracionInfo = Object.keys(diagnosticoPaciente).length !== 0
  //   ? `Restauracion: ${diagnosticoPaciente.Temporal ? `Temporal, ` : ``}${diagnosticoPaciente.Flow ? `Flow, ` : ``}${diagnosticoPaciente.MTA ? `MTA, ` : ''}${diagnosticoPaciente.Composite ? `Composite, ` : ``}${diagnosticoPaciente.Protesis ? `Protesis, ` : ""}${diagnosticoPaciente.otroRestauracion ? `Otro: ${diagnosticoPaciente.otroRestauracion}, ` : ""}\n`
  //   : "";
  // const anestesiaInfo = Object.keys(diagnosticoPaciente).length !== 0
  //   ? `Anestesia: ${diagnosticoPaciente.Anestesia ? `${diagnosticoPaciente.Anestesia}, ` : ``}${diagnosticoPaciente["Con Epinefrina"] ? `Con epinefrina, ` : ``}${diagnosticoPaciente.nroCarpules ? `Nro. Carpules:${diagnosticoPaciente.nroCarpules}, ` : ''}\n`
  //   : "";

  console.log(diagnosticoPaciente.OtroRestauracion);
  const restauracionInfo = (
    diagnosticoPaciente.Temporal ||
    diagnosticoPaciente.Flow ||
    diagnosticoPaciente.MTA ||
    diagnosticoPaciente.Composite ||
    diagnosticoPaciente.Protesis ||
    diagnosticoPaciente.OtroRestauracion
  )
    ? `Restauracion: ${diagnosticoPaciente.Temporal ? `Temporal, ` : ``}${diagnosticoPaciente.Flow ? `Flow, ` : ``}${diagnosticoPaciente.MTA ? `MTA, ` : ''}${diagnosticoPaciente.Composite ? `Composite, ` : ``}${diagnosticoPaciente.Protesis ? `Protesis, ` : ""}${diagnosticoPaciente.OtroRestauracion ? `Otro: ${diagnosticoPaciente.OtroRestauracion}, ` : ""}\n`
    : "";
  
  const anestesiaInfo = (
    diagnosticoPaciente.Anestesia ||
    diagnosticoPaciente["Con Epinefrina"] ||
    diagnosticoPaciente.nroCarpules
  )
    ? `Anestesia: ${diagnosticoPaciente.Anestesia ? `${diagnosticoPaciente.Anestesia}, ` : ``}${diagnosticoPaciente["Con Epinefrina"] ? `Con epinefrina, ` : ``}${diagnosticoPaciente.nroCarpules ? `Nro. Carpules:${diagnosticoPaciente.nroCarpules}, ` : ''}\n`
    : "";
  const medicacionInfo = Object.keys(medicacionPaciente).length !== 0
    ? `Medicacion paciente: ${medicacionPaciente.Medicacion ? `${medicacionPaciente.Medicacion}, ` : ``}${medicacionPaciente.amoxicilina ? `Amoxicilina: ${medicacionPaciente.amoxicilina}, por ${medicacionPaciente.DiasAmoxicilina} dias, cada ${medicacionPaciente.HorasAmoxicilina} horas, ` : ``}${medicacionPaciente.ibuprofeno ? `Ibuprofeno:${medicacionPaciente.ibuprofeno}, por ${medicacionPaciente.DiasIbuprofeno} dias, cada ${medicacionPaciente.HorasIbuprofeno} horas, ` : ''}${medicacionPaciente.OtroMedicamento ? `Otro:${medicacionPaciente.OtroMedicamento} mg:${medicacionPaciente.Otromg}, ` : ''}${medicacionPaciente.DiasOtraMedicacion ? `Por:${medicacionPaciente.DiasOtraMedicacion} dias, cada ${medicacionPaciente.HorasOtraMedicacion} horas, ` : ''}${medicacionPaciente.entreconsultabtn ? `${medicacionPaciente.entreconsultabtn}, ` : ``}${medicacionPaciente.diasOtraConsulta ? `Volver en ${medicacionPaciente.diasOtraConsulta} dias, ` : ``}\n`
    : "";
  const observacionesInfo = Object.keys(observacionesPaciente).length !== 0
    ? `Observaciones: ${observacionesPaciente.Observaciones ? `${observacionesPaciente.Observaciones} ` : ``}\n`
    : "";

  return `${pacienteInfo}${evaluacionInfo}${dolorInfo}${estudiosInfo}${vitalidadInfo}${diagnosticoInfo}${conducto1}${conducto2}${conducto3}${conducto4}${conducto5}${conducto6}${tecnicaObturacion}${restauracionInfo}${anestesiaInfo}${medicacionInfo}${observacionesInfo}`.replace(/ +(?= )/g, "").trim();
}

export default textToCopy;

