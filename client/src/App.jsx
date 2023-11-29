import { Route, BrowserRouter, Routes } from "react-router-dom";
// import SignIn from "./pages/signin";
// import Login from "./pages/login";
// import Profile from "./pages/profile";
// import ModificarPerfil from "./pages/modifProfile";
 import AddProduct from "./pages/addProduct";
// import ViewProduct from './pages/viewProduct';
// import Feed from "./pages/home";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signIn" element={<SignIn />} />
    //     <Route path="/perfil" element={<Profile />} />
    //     <Route path="/modificarPerfil" element={<ModificarPerfil />} />
    //     <Route path="/nuevaVenta" element={<AddProduct />} />
    //     <Route path="/verProducto" element={<ViewProduct />} />
    //   </Routes>
    // </BrowserRouter>
    // <Profile />
    // <ModificarPerfil/>
    // <SignIn/>
     <AddProduct />
    // <ViewProduct/>
    // <Feed />
  );
}

export default App;
