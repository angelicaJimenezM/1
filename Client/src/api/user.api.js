import axios from "axios";

//Esta función createUserRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del usuario proporcionados en el objeto user.
export const createUserRequest = async (user) =>{
  try {
    const response = await axios.post(
      "http://localhost:3000/Registrate",
      user
    );
    response.data.URL
      ? (window.location.href = response.data.URL)
      : console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//Esta función createGuideRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del guía proporcionados en el objeto guide.
export const createGuideRequest = async (guide) =>
  await axios.post("http://localhost:3000/Registrate/typeUser/Guia", guide);

//Esta función createTouristRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del turista proporcionados en el objeto tourist.
export const createTouristRequest = async (tourist) =>
  await axios.post(
    "http://localhost:3000/Registrate/typeUser/Turista",
    tourist
  );

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/Iniciar-sesion",
      user
    );
    response.data.redirectUrl
      ? // Redirige al usuario a la URL de redirección proporcionada por el servidor
        (window.location.href = response.data.redirectUrl)
      : // Maneja otras respuestas según sea necesario
        console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const typeUser = async (type) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/Registrate/typeUser",
      type
    );
    response.data.URL
      ? (window.location.href = response.data.URL)
      : console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};
