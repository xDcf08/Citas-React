import { useEffect,useState } from "react"
import Error from "./Error";


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)
  let Campo = document.querySelectorAll('.formulario > .form-group .border-2')

  useEffect(()=> {
    if(Object.keys(paciente).length){
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente]);

  //Generar id randomico
  const GenerarId = () => {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();

    //Validar formulario
    if( [nombre, propietario, email, fecha, sintomas].includes('') ){
      //Valdiación de campos vacios para mostrarle al usuario cuál es el campo vacio
      Campo.forEach( campos => {
        if(campos.value == '')  {
          campos.classList.add('border-red-600');
          setError(true)
        }
      })
      return;
    }else{
      Campo.forEach( campos => {
        if(campos.value != '')  {
          campos.classList.remove('border-red-600');
          setError(false)
        }
      })
    }

    const ObjetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id){
      //Editar registro
      ObjetoPaciente.id = paciente.id
      const pacienteActualizado = pacientes.map(pacienteState => 
        pacienteState.id === paciente.id ? ObjetoPaciente : paciente
      )
      setPacientes(pacienteActualizado)
      setPaciente({})
    }else{
      //Nuevo registro
      ObjetoPaciente.id = GenerarId()
      setPacientes([...pacientes, ObjetoPaciente])
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-center text-3xl'>
        Seguimiento Pacientes
      </h2>
      <p className='text-lg mt-2 text-center mb-5'>
        Agrega un paciente y 
        <span className='font-bold text-indigo-600'>  Administralo</span>
      </p>
      <form 
        className='bg-white shadow-md ml-4 rounded-lg px-5 py-5 mb-1 formulario'
        onSubmit={handleSubmit}
      >
        {error &&  <Error mensaje="Todos los campos son obligatorios"/>}
        <div className='mb-5 form-group'>
          <label htmlFor="mascota" className='block uppercase font-bold text-gray-700'>
            Nombre de mascota
          </label>
          <input
            id='mascota'
            type='text'
            placeholder='Nombre mascota'
            className='border-2 w-full p-1 mt-2 placeholder:text-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5 form-group'>
          <label htmlFor="propietario" className='block uppercase font-bold text-gray-700'>
            Nombre del propietario
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-1 mt-2 placeholder:text-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5 form-group'>
          <label htmlFor="Email" className='block uppercase font-bold text-gray-700'>
            Email
          </label>
          <input
            id='Email'
            type='text'
            placeholder='Email'
            className='border-2 w-full p-1 mt-2 placeholder:text-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5 form-group'>
          <label htmlFor="Alta" className='block uppercase font-bold text-gray-700'>
            Alta
          </label>
          <input
            id='Alta'
            type='date'
            placeholder='Alta'
            className='border-2 w-full p-1 mt-2 placeholder:text-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5 form-group'>
          <label htmlFor="sintomas" className='block uppercase font-bold text-gray-700'>
            Sintomas
          </label>
          <textarea 
            id='sintomas'
            className='border-2 w-full p-1 mt-2 placeholder:text-gray-400 rounded-md resize-none'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} 
          />
        </div>
        <input 
          type="submit"
          className='bg-indigo-600 text-white w-full p-2 uppercase rounded-md font-bold hover:bg-indigo-800 cursor-pointer transition-all'
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  )
}

export default Formulario
