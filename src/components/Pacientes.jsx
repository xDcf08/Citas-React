import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Modal from './Modal';

function Pacientes({paciente, setPaciente,EliminarPaciente}) {

  const [isModalOpen, setModalOpen] = useState(false);
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  const StyleIcon = {
    color: '#fff'
  }

  const StyleIconWarning = {
    width: '2em',
    height: '2em'
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const hancleDelete = () => {
    EliminarPaciente(id)
  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-5 rounded-xl'>
        <div className='flex justify-end'>
          <button 
            className='bg-red-600 rounded-md w-8 h-8'
            onClick={()=> openModal()}
          >
            { <CloseIcon style={StyleIcon}/> }
          </button>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <span className='w-full flex justify-center'><ErrorOutlineIcon style={StyleIconWarning}/></span>
            <p className='my-5 text-center'>¿Está seguro de eliminar el paciente?.</p>
            <div className='flex justify-around '>
              <button 
                className='bg-indigo-700 w-1/3 h-8 uppercase text-white font-medium rounded-md hover:bg-indigo-800'
                onClick={hancleDelete}
              >
                Aceptar
              </button >
              <button 
                className='bg-red-600 w-1/3 h-8 uppercase text-white font-medium rounded-md hover:bg-red-800'
                onClick={() => closeModal()}
              >
                Cancelar
              </button>
            </div>
          </Modal>

        </div>
        <p className='font-bold uppercase mb-3 text-gray-700'>
          Nombre:
          <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>
          Propietario:
          <span className='font-normal normal-case'> {propietario}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>
          Email:
          <span className='font-normal normal-case'> {email}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>
          Alta:
          <span className='font-normal normal-case'> {fecha}</span>
        </p>

        <p className='font-bold uppercase mb-3 text-gray-700'>
          Sintomas:
          <span className='font-normal normal-case'> {sintomas}</span>
        </p>
        <div className='flex justify-end'>
          <button 
            className='bg-indigo-700 mx-1 rounded-md w-8 h-8'
            onClick={()=> {setPaciente(paciente)}}
          >
            { <EditIcon style={StyleIcon}/> }
          </button>
        </div>
      </div>
  )
}

export default Pacientes
