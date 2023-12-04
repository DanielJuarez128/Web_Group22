import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AiOutlineSmile } from "react-icons/ai";

import searsYserway from "../assets/img/searsYserway.png";
import avm from "../assets/img/avm.png";
import calcu100tifica from "../assets/img/calcu100tifica.png";
import setreglast from "../assets/img/setreglast.png";
import audifonos from "../assets/img/audifonos.png";
import avmold from "../assets/img/avmold.png";
import calcu from "../assets/img/calcu.png";
import calculo from "../assets/img/calculo.png";
import calculo2 from "../assets/img/calculo2.png";
import calcuti from "../assets/img/calcuti.png";
import fisica from "../assets/img/fisica.png";
import gabacha from "../assets/img/gabacha.png";
import h from "../assets/img/h.png";
import japan from "../assets/img/japan.png";
import lapices from "../assets/img/lapices.png";
import laptop from "../assets/img/laptop.png";
import multi from "../assets/img/multi.png";
import reglat from "../assets/img/reglat.png";
import ti from "../assets/img/ti.png";
import giss from "../assets/img/giss.png";
import guty from "../assets/img/guty.png";

import React from "react";
import { useNavigate } from "react-router";

function Home() {
     const navigate = useNavigate();
  
    function handleVerProducto() {
      navigate("/verProducto");
    }


  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-2xl font-bold text-white p-10 text-center">
          Bienvenid@ de nuevo <AiOutlineSmile className="max-w-md mx-auto" />
        </h1>

        <div className="flex flex-wrap m-6 p-6 items-center justify-center">
          <div className="p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500 ">
              <img className="h-64 w-96" src={searsYserway} alt="foto" onClick={handleVerProducto} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Libro de Física</div>

                <p className=" text-white text-base p-2" >
                  Sears y Searway Vol2, perfectas condiciones.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $50
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
                    00013521@uca.edu.sv{" "}
                  </h3>
                </div>
              </div>

              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Libro
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Fisica
                </span>
              </div>
            </div>
          </div>






            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={calcu100tifica} alt="foto" onClick={handleVerProducto}/>

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
              <img className="h-64 w-96" src={avm} alt="foto" onClick={handleVerProducto} />

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
              <img className="h-64 w-96" src={setreglast} alt="foto" onClick={handleVerProducto}/>

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
              <img className="h-64 w-96" src={calcu} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  calculadora cientifica
                </div>

                <p className=" text-white text-base p-2">
                  Modelo fx-991EX, puede hacer matrices 4x4
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
                  <div id="calcuadora"></div>
                </span>
              </div>
            </div>
          </div>


















          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={calculo} alt="foto" onClick={handleVerProducto}/>

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





























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={giss} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Giss Bordados</div>

                <p className=" text-white text-base p-2">
                  Giss bordados esa soy yo, hago bonitos bordados por encargo.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    depende del pedido
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
                    00377822@uca.edu.sv{" "}
                  </h3>
                </div>
              </div>

              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Emprendimiento
                </span>
              </div>
            </div>
          </div>




















          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={reglat} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Regla t</div>

                <p className=" text-white text-base p-2">
                  Regla para dibujo técnico.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $7
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
                  <div id="Arquitectura"></div>
                </span>
              </div>
            </div>
          </div>



























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={ti} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Calculadora TI</div>

                <p className=" text-white text-base p-2">
                  Calculadora programable TI. Viene con estuche y sus accesorios
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
                  #calculadora
                </span>
              </div>
            </div>
          </div>
























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={audifonos} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Audifonos inalámbricos HUAWEI
                </div>

                <p className=" text-white text-base p-2">
                  Tienen cancelación de sonido decente, en la biblio no se
                  escucha casi nada
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $30
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
                  #extras
                </span>
              </div>
            </div>
          </div>






































          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={japan} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Libro de Japonés</div>

                <p className=" text-white text-base p-2">Para nivel avanzado</p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    acepto libros de ingles avanzado
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



































          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={calcuti} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Calculadora TI</div>

                <p className=" text-white text-base p-2">
                  Calculadora programable TI. Viene con estuche y sus accesorios
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $80
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
                  #calculo
                </span>
              </div>
            </div>
          </div>






















          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={guty} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">guty </div>

                <p className=" text-white text-base p-2">
                  Diseños de gran calidad por encargo.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    depende del diseño
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
                    00012922@uca.edu.sv{" "}
                  </h3>
                </div>
              </div>

              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Libro
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Fisica
                </span>
              </div>
            </div>
          </div>






























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={calculo2} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">libro calculo</div>

                <p className=" text-white text-base p-2">
                  util para calculo 1, perfectas condiciones.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $50
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
                  #calculo
                </span>
              </div>
            </div>
          </div>























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={h} alt="foto"onClick={handleVerProducto} />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Libro de analisis historico
                </div>

                <p className=" text-white text-base p-2">
                  util para estudiantes de arqui.
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
                  #Libro
                </span>
              </div>
            </div>
          </div>















          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={gabacha} alt="foto"onClick={handleVerProducto} />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">gabacha</div>

                <p className=" text-white text-base p-2">
                  gabacha con poco uso.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $40
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
                  #extras
                </span>
              </div>
            </div>
          </div>




























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={multi} alt="foto"onClick={handleVerProducto} />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">multimetro</div>

                <p className=" text-white text-base p-2">multimetro nuevo.</p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $60
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
                  #electrica
                </span>
              </div>
            </div>
          </div>































          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={laptop} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">laptop ryzen 5</div>

                <p className=" text-white text-base p-2">
                  laptop con ryzen 5 en perfecto estado.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $700
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
                  #Informatica
                </span>
              </div>
            </div>
          </div>





























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={lapices} alt="foto"onClick={handleVerProducto} />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">lapices de dibujo</div>

                <p className=" text-white text-base p-2">
                  paquete de lapices nuevos perfectos para dibujo
                  arquitectonico.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $50
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
                  #Arquitectura
                </span>
              </div>
            </div>
          </div>

























          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={avmold} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Libro para AVM</div>

                <p className=" text-white text-base p-2">
                  Libro para avm, viejo pero útil.
                </p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $5
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

















          <div className=" p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
            <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
              <img className="h-64 w-96" src={fisica} alt="foto" onClick={handleVerProducto}/>

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Libro de Física</div>

                <p className=" text-white text-base p-2">usado por 3 ciclos.</p>

                <div className="flex flex-wrap">
                  <h3 className="font-bold text-xl align-items-center p-1 ">
                    Precio:
                  </h3>{" "}
                  <h3 className="text-white text-base align-items-center p-1">
                    {" "}
                    $30
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
                  #Fisica
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
