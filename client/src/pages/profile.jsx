import { VscThumbsupFilled } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import user from "../assets/img/user.svg";

import avm from "../assets/img/avm.png";
import calcu100tifica from "../assets/img/calcu100tifica.png";
import setreglast from "../assets/img/setreglast.png";
import calculo from "../assets/img/calculo.png";

import React from "react";
import { useNavigate } from "react-router";

//rounded-full

function Profile() {
  const navigate = useNavigate();

  function handleEditProfile() {
    navigate("/modificarPerfil");
  }

  return (
    <div>
      <Header></Header>
      <h1 className="text-2xl font-bold text-white p-10 text-center">
        Mi perfil
      </h1>
      <div className=" p-5 authButtons flex flex-row space-x-6 space-y-6 items-center justify-start ">
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
          <h3 className="text-base font-bold text-white text-center">
            nombre usuario
          </h3>

          <div className="rounded-md max-w-md max-h-64 m-3">
            <img className="max-w-md max-h-64" src={user} alt="profilepic" />
          </div>

          <h3 className="text-base font-bold text-white text-center">
            00014620@uca.edu.sv
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
            <h2 className="text-lg font-bold text-white text-center">
              Información de contacto
            </h2>
            <p className="p-5">correo institucional: 00109822@uca.edu.sv </p>
            <button
              className="bg-cyan-700 px-3 py-3 flex flex-wrap text-white font-bold rounded-lg m-2 self-center justify-center items-center hover:bg-cyan-800"
              onClick={handleEditProfile}
            >
              <h3 className="px-3"> Editar</h3>
              <VscEdit />
            </button>
          </div>
        </div>



        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white p-10 text-center">
            Mis productos
          </h1>
          <div className="flex flex-wrap rounded-xl items-center justify-center">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={calcu100tifica} alt="foto" />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  calculadora cientifica
                </div>

                <p className=" text-white text-base p-2">
                  Calculadora con 1 año de uso.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $45
                  </h3>
                </div>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1">
                    Lista de deseos:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    -{" "}
                  </h3>
                </div>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1">
                    Informacion de contacto:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    00014620@uca.edu.sv{" "}
                  </h3>
                </div>
              </div>

              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #calculadora
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Fisica
                </span>
              </div>
            </div>

            <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
              <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
                <img className="h-64 w-96" src={avm} alt="foto" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Libro de avm escapini
                  </div>

                  <p className=" text-white text-base p-2">
                    Libro para algerba vectorial y matrices por ing escapini
                    (recomendado en plan de catedra)
                  </p>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1 ">
                      Precio:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      $70
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Lista de deseos:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      -{" "}
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Informacion de contacto:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      00014620@uca.edu.sv{" "}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Libro
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #avm
                  </span>
                </div>
              </div>
            </div>

            <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
              <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
                <img className="h-64 w-96" src={setreglast} alt="foto" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Set de Reglas</div>

                  <p className=" text-white text-base p-2">
                    Reglas para Dibujo técnico o arquitectura. Casi nuevas poco
                    uso
                  </p>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1 ">
                      Precio:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      $20
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Lista de deseos:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      -{" "}
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Informacion de contacto:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      00014620@uca.edu.sv{" "}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #dibujo
                  </span>
                </div>
              </div>
            </div>

            <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
              <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
                <img className="h-64 w-96" src={calculo} alt="foto" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Calculo de Mauro</div>

                  <p className=" text-white text-base p-2">
                    Calculo de mauro de una variable, abarca c1
                  </p>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1 ">
                      Precio:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      $55
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Lista de deseos:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      -{" "}
                    </h3>
                  </div>

                  <div className="flex flex-wrap">
                    <h3 className="font-bold text-xl align-items-center p-1">
                      Informacion de contacto:
                    </h3>{" "}
                    <h3 className="text-white text-base align-items-center p-1">
                      {" "}
                      00014620@uca.edu.sv{" "}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Libro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
