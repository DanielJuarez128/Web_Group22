import logoCuadrado from "../assets/logoCuadrado.svg";

import React from "react";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();

  function handleFeed() {
    navigate("/home");
  }

  return (
    <div className=" h-screen bg-black bg-repeat-y">
      <div className="max-w-md mx-auto  bg-black p-10 mb-4 ">
        <h1 className="text-2xl font-semibold text-white mb-3 text-center">
          Sign In
        </h1>
        <img
          className="w-21 h-21 box-border px-3 py-3 "
          src={logoCuadrado}
          alt="Logo"
        />
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-white text-center mb-4">
            Registrate ahora
          </h3>

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
          <button
            className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center  hover:bg-indigo-400"
            onClick={handleFeed}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
