import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import searsYserway from '../assets/img/searsYserway.jpg'

function ViewProduct() {
  return (
    <div>
      <Header></Header>
      <div className=" p-5 authButtons space-x-6 space-y-6 items-center justify-center">
        <h1 className="text-2xl font-semibold text-white text-center">
         Libro de Física
        </h1>
        <div className=" p-10 rounded-xl authButtons flex flex-wrap items-center justify-center ">
          <div className="bg-slate-800 p-10 rounded-lg m-6 authButtons flex flex-col items-center justify-center ">
            <img className="max-h-96" src={searsYserway} />{" "}
          </div>
          <div className="bg-teal-900 p-10 rounded-xl authButtons flex flex-col items-center justify-center ">
            <h1 className="text-lg font-bold text-white  text-center p-3">
              Descripción: 
            </h1>
            <p className="text-base text-white  text-center p-3">
            Sears y Searway Vol2, perfectas condiciones.
            </p>

            <div>
              <h1 className="text-lg font-bold text-white text-center p-3">
                Precio:
              </h1>
              <h3 className="text-base  text-white text-center p-3">
                $50
              </h3>
            </div>

            <h1 className="text-lg font-bold text-white  text-center p-3">
              Lista de deseos:
            </h1>
            <p className="text-base  text-white text-center p-3">
              Este usuario no acepta productos a cambio.
            </p>


            <h1 className="text-lg font-bold text-white  text-center p-3">
              Contacto:
            </h1>
            <p className="text-base  text-white text-center p-3">
            00013521@uca.edu.sv
            </p>
            <button className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center hover:bg-indigo-600">
              Contactar al vendedor
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ViewProduct;
