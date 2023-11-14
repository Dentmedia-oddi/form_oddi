import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalpoliticas.css";

function ModalPoliticas() {
  useEffect(() => {
    console.log(sessionStorage.getItem("politicas"));
    if (sessionStorage.getItem("politicas")) return;
    else {
      setShow(true);
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.href = "https://www.oddi.es";
  };

  const handleConfirm = () => {
    setShow(false);
    sessionStorage.setItem("politicas", "true");
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <b>Descargo de responsabilidad</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="textPolitica" >
              Los usuarios reconocen por la presente que las herramientas en
              línea que figuran en <b>www.oddi.es</b> no están certificadas como
              «productos sanitarios» y que los usuarios sólo tienen derecho a
              acceder al «estado real» como se publica en línea. Los usuarios
              utilizan esta herramienta en línea bajo su propia responsabilidad
              y riesgo. Nuestra plantilla no guarda los datos introducidos de
              los formularios.
            </p>
            <p className="textPolitica">
              Los autores/equipo de www.oddi.es no garantizan el uso de sus
              herramientas para un fin determinado. Los autores no se hacen
              responsables de los daños derivados del uso de estas herramientas
              en línea a nivel privado o en la consulta dental.
            </p>
            <b>Responsabilidad del Usuario</b>
            <br />
            <p className="textPolitica">
              En el caso de que el usuario de la herramienta/plantilla haga la
              recopilación de los datos personales de sus pacientes, es
              importante destacar que dicho usuario es el único responsable de
              la gestión y tratamiento de los Datos Personales de sus pacientes
              de acuerdo con las leyes y regulaciones aplicables.
            </p>
            <p className="textPolitica">
              La Plantilla solo se proporciona como una herramienta de resumen,
              y la responsabilidad de cumplir con las obligaciones legales y
              éticas relacionadas con la protección de datos de los pacientes
              recae totalmente en el usuario.
            </p>
            <p className="textPolitica">
              Los autores no están obligados a proporcionar ningún tipo de apoyo
              técnico, médico o de otro tipo. Igualmente agradecen cualquier
              comentario sobre sus herramientas en línea.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPoliticas;
