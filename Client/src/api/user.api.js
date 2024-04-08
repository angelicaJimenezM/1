import axios from 'axios'
export const createUserRequest = async (user) =>  
    await axios.post('http://localhost:3000/Iniciar-sesion',user)
