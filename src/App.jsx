import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Index from 'pages/Admin/Index';
import Vehiculos from 'pages/Admin/Vehiculos';
import Clientes from 'pages/Admin/Clientes';
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
          <Route path="/login" element={<AuthLayout><div>Login</div></AuthLayout>} />
          <Route path="/registro" element={<AuthLayout><div>Registro</div></AuthLayout>} />
          <Route path="/admin" element={<PrivateLayout><div><Index/></div></PrivateLayout>} />
          <Route path="/admin/clientes" element={<PrivateLayout><div><Clientes/></div></PrivateLayout>} />
          <Route path="/admin/vehiculos" element={<PrivateLayout><div><Vehiculos/></div></PrivateLayout>} />
          <Route path="/" element={<PublicLayout><div>Index</div></PublicLayout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
