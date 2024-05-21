import axios from "axios";
//Esta función createUserRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del usuario proporcionados en el objeto user.
export const createUserRequest = async (user) => {
  try {
    const response = await axios.post("http://localhost:3000/Registrate", user);
    return response.data.tipo_usuario;
  } catch (e) {
    console.error(e);

  }
};

//Esta función createGuideRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del guía proporcionados en el objeto guide.
export const createGuideRequest = async (guide) =>{
  try{
   const response = await axios.post("http://localhost:3000/Registrate/Guia", guide);
  console.log(response);
  }catch(e){
    console.error(e)
    throw e; // Re-lanza el error para que pueda ser capturado en el componente

  }
}

//Esta función createTouristRequest es una función asíncrona que utiliza Axios, para hacer solicitudes HTTP para realizar una solicitud POST a la URL con los datos del turista proporcionados en el objeto tourist.
export const createTouristRequest = async (tourist) =>
  await axios.post("http://localhost:3000/Registrate/Turista", tourist);

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/Iniciar-sesion",
      user
    );
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const createTouristPackage = async (tPackage) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/Msg/TouristPlan",
      tPackage
    );
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export const createProviderRequest = async (providerU) => {
  try{
    const response = await axios.post("http://localhost:3000/Registrate/Proveedor",providerU)
    console.log(response)
  }catch(e){
    console.error(e)
  }
}

export const createItinerartRequest = async (Itinerary) => {
  try{
    const response = await axios.post("http://localhost:3000/Msg/Itinerario",Itinerary)
    console.log(response)
  }catch(e){
    console.error(e)
  }
}

//Obtenemos los datos
export const showPackage = async () => {
  try {
    const response = await axios.get("http://localhost:3000/Msg/planes");
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

