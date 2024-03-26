import MSG from "../assets/Icons/Logo.jpg";
import { Button } from "../Components/Button";
export const Provider = () => {
  return (
    <div className="flex flex-col flex-wrap items-center mx-3 my-5 p-5 bg-white rounded-xl">
      <header className=" w-full flex flex-col items-center">
        <img src={MSG} alt="No found" className="Logo" />
        <div className="w-full text-center p-1 pb-2">
          <p className="text-2xl font-bold">Crea una cuenta como proveedor </p>
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
          <label htmlFor="">Nombre de la empresa (Opcional)</label>
          <input
            type="text"
            placeholder="ingrese el nombre de la empresa"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="" className="">
            <p>Tipo de servicio</p>
            <input
              type="number"
              placeholder="Seleccione un tipo de servicio"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
          </label>
          <label htmlFor="" className="">
            <p>Tarifas</p>
            <input
              type="text"
              placeholder="Ingrese su tarifa"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
          </label>
          <label htmlFor="" className="">
            <p>Condiciones de pago</p>
            <input
              type="text"
              placeholder="Seleccione un metodo de pago"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
          </label>
          <label htmlFor="">Correo</label>
          <input
            type="text"
            placeholder="ingrese su correo"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
          <label htmlFor="">Numero de telefono</label>
          <input
            type="text"
            placeholder="ingrese su numero de telefono"
            className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
          />
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
      </main>
    </div>
  );
};
