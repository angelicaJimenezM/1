import MSG from "../assets/Icons/Logo.jpg";
import Guide from "../assets/Image/Guide.png"
import GuidePc from "../assets/Image/GuidePC.jpeg"
import { Button } from "../Components/Button";
//------------------------
import { Link } from 'react-router-dom'
//-----------------------------------
export const Guia = () => {
  return (
    <div className="flex flex-col flex-wrap items-center mx-3 my-5 p-5 bg-white rounded-xl xl:mx-20">
      <header className=" w-full flex flex-col items-center xl:flex-row xl:justify-around">
        <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-44' /></Link>
        <div className='w-full text-center p-1 pb-2 xl:hidden'>
          <p className='text-2xl font-bold'>Crea una cuenta como guia </p>
          <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
        </div>
      </header>
      <main className="Main py-10 mb-5 px-10 rounded-xl xl:w-full xl:grid xl:grid-cols-2 xl:border-none">
        <div className='hidden xl:flex w-full justify-center items-center'>
          <img src={GuidePc} alt="" className='w-10/12 block' />
        </div>
        <form action="" className="Form w-full flex flex-col overflow-y-auto xl:border xl:border-black xl:max-h-none xl:px-14 xl:py-4 xl:rounded-2xl">
          <div className='w-full text-center p-10 pb-2 hidden xl:flex xl:flex-col'>
            <p className='text-2xl font-bold'>Crea una cuenta como guia </p>
            <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
          </div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su Nombre"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="">Apeliido</label>
          <input
            type="text"
            placeholder="ingrese sus apellidos"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="">Numero de telefono</label>
          <input
            type="text"
            placeholder="Ingrese su correo"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="">Idiomas que hablas</label>
          <input
            type="text"
            placeholder="ingrese todo los idiomas que habla"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="">Nivel de idioma</label>
          <input
            type="text"
            placeholder="ingrese los niveles"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <div className="flex justify-evenly">
            <label htmlFor="" className=''>
              <p>Edad</p>
              <input
                type="number"
                placeholder='20'
                className='border border-gray-400 w-14 h-14 xl:pl-3 rounded-full mb-5 my-3 text-center outline-none' />
            </label>
            <label htmlFor="" className=''>
              <p>Sexo</p>
              <input
                type="text"
                placeholder='M'
                className='border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none' />
            </label>
          </div>
          <div className="text-center">
            <Button
              label="Registrate"
              link={""}
              style={{
                background: "#9ED4C6",
                border: "1px solid #000",
                color: "#000",
              }}
            />
          </div>
        </form>
        <img src={Guide} alt="" className="Guide w-1/2 xl:hidden" />
      </main>
    </div>
  );
};
