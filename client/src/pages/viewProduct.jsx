import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Logobuho from "../assets/Logobuho.svg";

function ViewProduct() {
  return (
    <div>
      <Header></Header>
      <div className=" p-5 authButtons space-x-6 space-y-6 items-center justify-center">
        <h1 className="text-2xl font-semibold text-white text-center">
          nombre articulo
        </h1>
        <div className="bg-slate-800 p-10 rounded-xl authButtons flex flex-wrap items-center justify-center ">
          <div className="bg-amber-400 p-10 m-6 authButtons flex flex-col items-center justify-center ">
            <img src={Logobuho} />{" "}
          </div>
          <div className="bg-teal-900 p-10 rounded-xl authButtons flex flex-col items-center justify-center ">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Descripción:
            </h3>
            <p className="text-base font-bold text-white text-center p-3">
              aqui va la descripcion del producto
            </p>

            <div>
              <h3 className="text-lg font-bold text-white text-center p-3">
                Precio:
              </h3>
              <h3 className="text-base font-bold text-white text-center p-3">
                de haber precio, va aqui
              </h3>
            </div>

            <h3 className="text-lg font-bold text-white text-center p-3">
              Lista de deseos:
            </h3>
            <p className="text-base font-bold text-white text-center p-3">
              Lista de deseos
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
