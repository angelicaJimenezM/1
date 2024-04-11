import axios from "axios";

//Esta función createUserRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del usuario proporcionados en el objeto user.
export const createUserRequest = async (user) =>
  await axios.post("http://localhost:3000/Iniciar-sesion", user);

//Esta función createGuideRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del guía proporcionados en el objeto guide.
export const createGuideRequest = async (guide) =>
  await axios.post("http://localhost:3000/Iniciar-sesion/typeUser/Guia", guide);
