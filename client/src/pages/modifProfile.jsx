import { VscThumbsupFilled } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

function ModificarPerfil() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-2xl font-bold text-white p-10 text-center">
        Mi perfil
      </h1>
      <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center">
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
          <h3 className="text-base font-bold text-white text-center">
            nombre usuario
          </h3>
          <img></img>
          <h3 className="text-base font-bold text-white text-center">
            correo usuario
          </h3>
          <button className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-indigo-600">
            Contactame
          </button>
          <div className="flex flex-wrap align-items-center">
            <button className="bg-lime-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-lime-700">
              <VscThumbsupFilled />
            </button>
            <button className="bg-red-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-red-700">
              <VscThumbsdownFilled />
            </button>
          </div>
          <div className="bg-slate-400 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-white text-center mb-4">
              Información de contacto
            </h2>
            <textarea
              className="bg-slate-300 p-3 w-full mb-2"
              placeholder="¿De qué otra forma se puede contactarte?"
              //onChange={(e) => setDescription(e.target.value)}
              //value={description}
            ></textarea>
            <button className="bg-cyan-700 px-3 py-3 flex flex-wrap text-white font-bold rounded-lg m-2 self-center justify-center items-center hover:bg-cyan-800">
              <h3 className="px-3"> Guardar cambios</h3> < VscCheck />
            </button>
          </div>
        </div>

        <div className="bg-lime-600 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-white text-center">
            Mis publicaciones
          </h2>
          <div></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ModificarPerfil;
