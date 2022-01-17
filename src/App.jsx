import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Index from 'pages/Admin/Index';
import Vehiculos from 'pages/Admin/Vehiculos';
import Clientes from 'pages/Admin/Clientes';
import Login from "pages/login";
import Registro from 'pages/registro'
import Edad from 'pages/Admin/Edad'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'styles/styles.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthLayout><Login/></AuthLayout>} />
          <Route path="/registro" element={<AuthLayout><Registro/></AuthLayout>} />
          <Route path="/admin" element={<PrivateLayout><Index/></PrivateLayout>} />
          <Route path="/admin/clientes" element={<PrivateLayout><Clientes/></PrivateLayout>} />
          <Route path="/admin/vehiculos" element={<PrivateLayout><Vehiculos/></PrivateLayout>} />
          <Route path="/admin/edad" element={<PrivateLayout><Edad/></PrivateLayout>} />
          <Route path="/" element={<PublicLayout><div>Index</div></PublicLayout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
