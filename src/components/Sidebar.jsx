import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
import 'styles/responsive.css'

const Sidebar = () => {
    return (
        <nav className="w-72 border border-gray-300 h-full flex flex-col bg-gray-400 p-6 sidebar">
            <Link to='/admin'>
            <ImagenLogo/>
            </Link>
            <div className='my-4'>
            <Ruta icono='fas fa-user' ruta='/admin/profile' nombre='Perfil'/>
            <Ruta icono='fas fa-car' ruta='/admin/vehiculos' nombre='Vehiculos'/>
            <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas'/>
            <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios'/> 
            </div>
            <button className='flex items-start'>Cerrar Sesión</button>
        </nav>
    )
}

const Ruta = ({icono, nombre, ruta}) =>{
    return (<Link to={ruta}>
    <button className='p-1 m-1 bg-indigo-500 hover:bg-indigo-700 flex w-full items-center justify-center text-white rounded-md'>
    <i className={`${icono} w-10`} />
        {nombre}
    </button>
    </Link>
    )
}

export default Sidebar
