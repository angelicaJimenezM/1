import MSG from "../assets/Icons/Logo.jpg";
import Guide from "../assets/Image/Guide.png"
import { Button } from "../Components/Button";

export const Guia = () => {
  return (
    <div className="flex flex-col flex-wrap items-center mx-3 my-5 p-5 bg-white rounded-xl">
      <header className=" w-full flex flex-col items-center">
        <img src={MSG} alt="No found" className="Logo" />
        <div className="w-full text-center p-1 pb-2">
          <p className="text-2xl font-bold">Crea una cuenta como guia </p>
          <p className="text-base font-bold text-gray-400">
            Ingresa tu informacion
          </p>
        </div>
      </header>
      <main className="Main flex flex-col py-10 mb-5 px-10 rounded-xl">
        <form action="" className="Form w-full flex flex-col overflow-y-auto ">
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
            <label htmlFor="">sexo</label>
            <input
              type="text"
              placeholder="F"
              className="border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none"
            />
            <label htmlFor="">edad</label>
            <input
              type="text"
              placeholder="20"
              className="border border-gray-400 w-14 h-14 p-3 rounded-full mb-5 my-3 text-center outline-none"
            />
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
        <img src={Guide} alt="" className="Guide" />
      </main>
    </div>
  );
};
