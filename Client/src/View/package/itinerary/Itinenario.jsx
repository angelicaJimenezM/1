import imagen from '../../../assets/Image/Itnerario.png'
import { Button } from '../../../Components/Button'
import { useEffect, useState } from 'react'
import { showPackage } from '../../../api/user.api';
import { createItinerartRequest } from '../../../api/user.api';
export const Itinerario = () => {
   const [data, setData] = useState([])
   const [descripcion, setDescripcion] = useState('');
   const [cupos, setCupos] = useState('');
   const [idPlan, setIdplan] = useState(0);

   const hadleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await createItinerartRequest({
            ID_paquetes: idPlan,
            DESCRIPCION: descripcion,
            CUPOS: cupos
         })
         console.log(response)
      } catch (e) {
         console.error(e);
      }
   }
   useEffect(() => {
      const getData = async () => {
         try {
            const response = await showPackage();
            setData(response)
         } catch (e) {
            console.error("Error al obtener los datos: ", e)
         }
      };
      getData();
   }, [])
   return (
      <div className='xl:grid xl:grid-cols-10 mr-5' >
         <div className='col-span-3'>
            <img src={imagen} alt="" className='w-full' />
         </div>
         <form onSubmit={hadleSubmit} action="" className='Itinerary col-span-7 xl:grid 
         xl:grid-rows-10 rounded-xl'>
            <div className='row-span-2 xl:flex '>
               <div className='w-full ml-11'>
                  <h1 className='font-bold text-2xl'>Itinerario</h1>
                  <small className='text-sm'>Detallemos esa aventura</small>
               </div>

               <div className='w-full font-bold text-xl py-5 mr-5'>
                  <label htmlFor="">Cupos</label>
               </div>
            </div>

            <div className='row-span-8 flex ml-10'>
               <textarea
                  value={descripcion}
                  onChange={(e) => { setDescripcion(e.target.value) }} cols={30} rows={10}
                  className='Itinerary pl-2 rounded-2xl outline-none py-2 mb-5'
                  placeholder='Describe el itinerario aqui'></textarea>

               <div className='flex flex-col ml-10 gap-y-5'>
                  <input
                     type="text"
                     value={cupos}
                     onChange={(e) => { setCupos(e.target.value) }}
                     className='Itinerary outline-none placeholder:text-xs pl-2 rounded-lg'
                     placeholder='Ingrese la cantidad de cupos' />
                  <select
                     value={idPlan}
                     onChange={(e) => setIdplan(parseInt(e.target.value))}
                     className="Itinerary rounded-lg outline-none text-xs p-1"
                  >
                     <option value="">Seleccione un plan turístico</option>
                     {data.map((packageT) => (
                        <option key={packageT.nit} value={packageT.nit}>
                           {packageT.nit} | {packageT.nombre}
                        </option>
                     ))}
                  </select>

                  <Button label='Registrar' style={{
                     marginTop: '0.8rem',
                     marginBottom: '0.8rem',
                     background: '#AFE1E2',
                     color: '#000'
                  }} />
               </div>
            </div>
         </form>
      </div>

   )
}