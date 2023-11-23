import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import logoCuadrado from "../assets/logoCuadrado.svg";
import Button from "../components/Button";

import React from "react";

//creando boton para iniciar sesion
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center "
        onClick={() => loginWithRedirect}
      >
        Sign In with Google
      </button>
    )
  );
};

function Login() {
  return (
    <div className=" h-screen bg-black bg-repeat-y">
      <div className="max-w-md mx-auto  bg-black p-10 mb-4 ">
        <h1 className="text-2xl font-semibold text-white mb-3 text-center">
          Log in
        </h1>
        <img
          className="w-21 h-21 box-border px-3 py-3 "
          src={logoCuadrado}
          alt="Logo"
        />
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-white text-center">Email: </h3>
          <input
            className="bg-slate-300 p-3 w-full mb-3"
            placeholder="Ingresa tu correo"
            // onChange={(e) => setEmail(e.target.value)}
            // value={title}
            autoFocus
          />
          <h3 className="text-lg font-semibold text-white text-center">
            Contraseña:{" "}
          </h3>
          <input
            className="bg-slate-300 p-3 w-full mb-3 "
            placeholder="Ingresa tu contraseña"
            // onChange={(e) => setPassword(e.target.value)}
            // value={title}
            autoFocus
          />
          <Button className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center">
            Iniciar sesión
          </Button>
          <h3>También puedes:</h3>
          <LoginButton className="mx-auto" />
        </div>
      </div>
      <footer>
        <h3>¿Aún no tienes una cuenta?</h3>
        <Button>Registrate ahora</Button>
      </footer>
    </div>
  );
}

export default Login;

/*<React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>

*/
