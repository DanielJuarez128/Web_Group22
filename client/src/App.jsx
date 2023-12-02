import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./pages/signin";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ModificarPerfil from "./pages/modifProfile";
import AddProduct from "./pages/addProduct";
import ViewProduct from "./pages/viewProduct";
import Home from "./pages/home";
import PerfilAjeno from "./pages/viewOtherProfile";
import PerfilGuti from './pages/guty'
import FeedEmprendedores from './pages/empFeed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/modificarPerfil" element={<ModificarPerfil />} />
        <Route path="/nuevaVenta" element={<AddProduct />} />
        <Route path="/verProducto" element={<ViewProduct />} />
        <Route path="/home" element={<Home />} />
        <Route path="/verPerfil" element={<PerfilAjeno />} />
        <Route path="/verPerfil2" element={<PerfilGuti />} />
        <Route path="/Emprendimientos" element={<FeedEmprendedores />} />
        <Route path="/verProducto" element={<ViewProduct/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
