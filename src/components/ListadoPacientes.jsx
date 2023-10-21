import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente,EliminarPaciente}) {

  return(
    <div className='d:w-1/2 lg:w-3/5 h-screen'>
    {pacientes && pacientes.length ? (
      <>
        
        <h2 className='font-black text-center text-3xl '>
          Listado Pacientes
        </h2>
        <p className='text-xl mt-2 text-center mb-5'>
          Administra tus
          <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
        </p>
        <div className="h-3/4 overflow-y-scroll">
          {pacientes.map( paciente => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              EliminarPaciente={EliminarPaciente}
            />
          ))}
        </div>

      </>
    ) : (
      <>
        <h2 className='font-black text-center text-3xl '>
          Agrega un paciente
        </h2>
        <p className='text-xl mt-2 text-center mb-5'>
          Administra tus
          <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
        </p>
      </>
    )}
    </div>
  ) 
}

export default ListadoPacientes
