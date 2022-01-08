import React, {useEffect, useState} from 'react'

const Vehiculos = () => {

    const [nombreVehiculo, setNombreVehiculo] = useState('');

    useEffect(()=>{
        console.log("Hola, soy un use effect que se ejecuta una sola vez, cuando la pagina se renderiza, porque tiene el array de dependencias vacío");
        //Paso 2
        //Paso 3
        //Paso 4
    },[])

    useEffect(()=>{
        console.log("Esta es una función que se ejecuta cada vez que cambia el valor de nombreVehiculo");
        console.log("El valor de la variable es: ", nombreVehiculo)
    }, [nombreVehiculo])

    const enviarDatosAlBackend = () => {
        console.log("El valor de la variable nombre vehiculo es: ", nombreVehiculo)
    }


    return (
        <form className="flex flex-col">
            <h2>Formulario de Creación de vehículos</h2>
            <input onChange={(e) => {
        setNombreVehiculo("Nombre: " + e.target.value)}} type="text" placeholder="Nombre del vehiculo"/>
            <input onChange={(e) => {
        console.log("Marca: " + e.target.value);
    }} type="text" placeholder="Marca del vehiculo"/>
            <input type="text" placeholder='Modelo del vehiculo'/>
            <button type="button"onClick = {enviarDatosAlBackend} className="bg-indigo-500 text-white">Enviar Datos</button>
        </form>

    )
}

export default Vehiculos
