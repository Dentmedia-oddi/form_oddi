import axios from "axios";

export const saveAnswer = async (question, answer) => {
  return axios.post("https://backendoddi.onrender.com/api/saveAnswer", { question, answer });
  // return axios.post("http://localhost:3000/api/saveAnswer", { question, answer });
}