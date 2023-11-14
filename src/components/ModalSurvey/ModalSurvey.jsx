import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Modal from "react-bootstrap/Modal";
import dataQuestions from "../../dataBtn.json"
import "./modalsurvey.css";

//API
import { saveAnswer } from "../../api/answer.api";

function ModalSurvey({openModal}) {

  const questions = dataQuestions.find(questions => questions.type === "surveyQuestions").data;
  const questionsRandom = Math.round(Math.random() * (questions.length-1));
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(openModal);
  }, [openModal])

  const handleSurveyAnswer = async (answerValue) => {
    toast.success("Gracias por su respuesta!");
    let oddiCounter = parseInt(localStorage.getItem("oddiCounter"));
    localStorage.setItem("oddiCounter", oddiCounter + 1)
    setShow(false);
    let question = questions[questionsRandom];
    console.log(question);
    try {
      const resApi = await saveAnswer(question, answerValue);
      console.log(resApi);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modalSurveyMainContainer">
      <div><Toaster/></div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Encuesta ODDI:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions[questionsRandom]}
          <div className="answersSurveyContainer">
            <span className="emojiSurvey" onClick={() => handleSurveyAnswer(1)}>😞</span>
            <span className="emojiSurvey" onClick={() => handleSurveyAnswer(2)}>😐</span>
            <span className="emojiSurvey" onClick={() => handleSurveyAnswer(3)}>🤩</span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalSurvey;
