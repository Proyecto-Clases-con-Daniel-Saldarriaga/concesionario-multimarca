import React, {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que le diga si el usuario es mayor de edad o no

const vehiculosBackend = [
    {
        nombre: "Corolla",
        marca: "Toyota",
        modelo: "2014"
    },
    {
        nombre: "Sandero",
        marca: "Renault",
        modelo: "2020"
    },
    {
        nombre: "Rav4",
        marca: "Toyota",
        modelo: "2021"
    },
    {
        nombre: "Fiesta",
        marca: "Ford",
        modelo: "2017"
    },
    {
        nombre: "Mazda3",
        marca: "Mazda",
        modelo: "2020"
    },
    {
        nombre: "Fiesta",
        marca: "Ford",
        modelo: "2017"
    },
    {
        nombre: "Mazda3",
        marca: "Mazda",
        modelo: "2020"
    }
]

const Vehiculos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nuevo vehiculo');
    const [colorBoton, setColorBoton] = useState('indigo');

    useEffect(()=>{
        //Obtener lista de vehiculos desde el backend
        setVehiculos(vehiculosBackend);
    }, [])

    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton('Crear nuevo vehiculo');
            setColorBoton('indigo');
        }else{
            setColorBoton('red');
            setTextoBoton('Mostrar todos los vehiculos');
        }
    }, [mostrarTabla]);
    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
            <h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de vehículos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={
                `text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`
            }>{textoBoton}</button>
            {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculosBackend} /> : <FormularioCreacionVehiculos funcionParaMostrarLaTabla = {setMostrarTabla}
            listaVehiculos = {vehiculos} 
            funcionParaModificarLaTabla = {setVehiculos} 
            />}
            <ToastContainer position="bottom-center" autoClose={5000} />
            </div>

        </div>
    );
};

const TablaVehiculos = ({listaVehiculos}) => {
    useEffect(()=>{
        console.log("Este es el listado de vehiculos en el componente de tabla", listaVehiculos);
    }, [listaVehiculos]);

    return(
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehiculos</h2>
            <table>
            <thead>
                <tr>
                    <th>Nombre del vehiculo</th>
                    <th>Marca del vehiculo</th>
                    <th>Modelo del vehiculo</th>
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{
                    return (<tr>
                    <td>{vehiculo.nombre}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                </tr>)
                })}
            </tbody>
        </table>
        </div>
    )
};

const FormularioCreacionVehiculos = ({funcionParaMostrarLaTabla, listaVehiculos, funcionParaModificarLaTabla}) => {

    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");

    const enviarAlBackend = () => {
        console.log("Nombre: " + nombre + " Marca: " + marca + " Modelo: " + modelo);
        if(nombre === "" || marca === "" || modelo === ""){
            toast.error("Ingrese todas las informaciones");
        }else{
            toast.success('Vehiculo creado con éxito');
            funcionParaMostrarLaTabla(true);
            funcionParaModificarLaTabla([...listaVehiculos, {nombre: nombre, marca: marca, modelo: modelo}]);
        }
    }

    return <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehiculo</h2>
        <form className='flex flex-col'>
            <label className='flex flex-col' htmlFor="nombre">
                Nombre del vehiculo
            <input name="nombre" className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Corolla" 
            value = {nombre}
            onChange = {(e)=>{
                setNombre(e.target.value);
            }}
            required
            />
            </label>
            <label className='flex flex-col' htmlFor='marca'>
                Marca del vehiculo
            <select name='marca' className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' value = {marca} onChange = {(e)=>{ setMarca(e.target.value)}} required>
                <option disabled>Seleccione un opción</option>
                <option>Renault</option>
                <option>Toyota</option>
                <option>Ford</option>
                <option>Mazda</option>
                <option>Chevrolet</option>
            </select>
            </label>
            <label className='flex flex-col' htmlFor="modelo">
                Modelo del vehiculo
            <input name="modelo" min={1992} max={2022} className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="2014" value = {modelo} onChange = {(e)=>{ setModelo(e.target.value)}} required/>
            </label>
        </form>
            <button type="submit" className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white' onClick={()=>{enviarAlBackend()}}>Guardar vehiculo</button>

    </div>
}



export default Vehiculos;


