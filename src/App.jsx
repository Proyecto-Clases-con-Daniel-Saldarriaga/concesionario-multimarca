import { useState, useEffect } from "react";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Admin from 'pages/Admin/Index';
import Vehiculos from 'pages/Admin/Vehiculos';
import Clientes from 'pages/Admin/Clientes';
import Login from "pages/login";
import Registro from 'pages/registro'
import Edad from 'pages/Admin/Edad'
import Index from 'pages/index'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'styles/styles.css';
import {DarkModeContext} from 'context/darkMode'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
  console.log("Modo Dark: ", darkMode);
  }, [darkMode]);
  return (
    <>
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthLayout><Login/></AuthLayout>} />
          <Route path="/registro" element={<AuthLayout><Registro/></AuthLayout>} />
          <Route path="/admin" element={<PrivateLayout><Admin/></PrivateLayout>} />
          <Route path="/admin/clientes" element={<PrivateLayout><Clientes/></PrivateLayout>} />
          <Route path="/admin/vehiculos" element={<PrivateLayout><Vehiculos/></PrivateLayout>} />
          <Route path="/admin/edad" element={<PrivateLayout><Edad/></PrivateLayout>} />
          <Route path="/" element={<PublicLayout><div><Index/></div></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
    </>
  );
}

export default App;
