import oddiLogoNavBar from "../../assets/ODDI 4.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./navbarform.css";
import { useState } from "react";

function NavbarForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbarFormMainContainer">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pasos para un registro con ODDI:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol className="olBodyModal">
            <li>
              Rellena la plantilla según la visita clínica, centrándote en los
              detalles clave del tratamiento.
            </li>
            <li>
              Completa solo lo necesario; los ítems que dejes en blanco no se
              tomarán en cuenta al pinchar el botón «Copiar consulta».
            </li>
            <li>
              Finalizado el registro, haz clic en «Copiar consulta«. ¡Toda la
              información estará lista para pegar donde necesites! (Puedes usar
              «Ctrl» + «V» para pegar donde desees)
            </li>
            <li>
              Pinchando en «Limpiar campos» reini - cias la plantilla en blanco
              para una nueva consulta.
            </li>
            <li>
              Escríbenos a <b>info@oddi.es</b> para obtener asistencia rápida y
              personalizada en caso de alguna incidencia.
            </li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
      <a href="https://www.oddi.es/">
        <img src={oddiLogoNavBar} alt="oddiLogo" className="oddiLogoNavbar" />
      </a>
      <button className="buttonInt" onClick={handleShow}>
        Instrucciones
      </button>
    </div>
  );
}

export default NavbarForm;
