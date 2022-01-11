import React, {useEffect, useState} from 'react'

//realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que le diga si el usuario es mayor de edad o no

const Vehiculos = () => {

  const [nombreVehiculo, setNombreVehiculo] = useState("Este es el valor inicial");
  const [marcaVehiculo, setMarcaVehiculo] = useState("Este es el valor inicial");
  const [modeloVehiculo, setModeloVehiculo] = useState("Este es el valor inicial");

    useEffect(()=>{
      console.log("Hola, soy un effect que se ejecuta sólo una vez cuando se renderiza la página tiene el array de dependencias vacío");
      // paso 2
      // paso 3
      // paso 4
    }, []);

    const EnviarDatosAlBackend = () =>{
        console.log("El valor de la variable nombreVehiculo es ", nombreVehiculo);
        console.log("El valor de la variable marcaVehiculo es: ", marcaVehiculo);
        console.log("El valor de la variable modeloVehiculo es: ", modeloVehiculo);
    }

    return (
        <form className="flex flex-col">
            <h2>Formulario de creación de vehiculos</h2>
            <input onChange={(e) =>{setNombreVehiculo(e.target.value)}} type="text" placeholder="Nombre del vehiculo"/>
            <input onChange={(e) =>{setMarcaVehiculo(e.target.value)}} type="text" placeholder="Marca del vehiculo"/>
            <input onChange={(e) =>{setModeloVehiculo(e.target.value)}} type="text" placeholder="Modelo del vehiculo"/>
            <button type="button" onClick= {EnviarDatosAlBackend} className="bg-indigo-500 text-white">Enviar datos</button>
        </form>

    )
}

export default Vehiculos
