import { VscThumbsupFilled } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import gissLogo from "../assets/img/gissLogo.jpg";
import gb1 from "../assets/img/gb1.jpg";
import gb2 from "../assets/img/gb2.jpg";
import gb3 from "../assets/img/gb3.jpg";
import gb4 from "../assets/img/gb4.jpg";
import gb5 from "../assets/img/gb5.jpg";

import React from "react";
import { useState, useEffect } from "react";

//rounded-full

function PerfilAjeno() {
  const [reputacion, setReputacion] = useState(10000);

  return (
    <div>
      <Header></Header>
      <h1 className="text-2xl font-bold text-white p-10 text-center m-4">
        Emprendimiento
      </h1>
      <div className="p-5 authButtons flex flex-row space-x-6 space-y-6 items-center justify-start ">
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
          <h3 className="text-base font-bold text-white text-center">
            Gisselle Alexandra Aquino Merino
          </h3>
          <div className="rounded-md max-w-md max-h-64 m-3">
            <img
              className="max-w-md max-h-64"
              src={gissLogo}
              alt="profilepic"
            />
          </div>

          <h3 className="text-base font-bold text-white text-center">
            00377822@uca.edu.sv
          </h3>
          <button className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-indigo-600">
            Contactame
          </button>
          <h3 className="text-base font-bold text-white text-center">
            Reputación : {reputacion}{" "}
          </h3>
          <div className="flex flex-wrap align-items-center">
            <button
              className="bg-lime-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-lime-700"
              onClick={() => {
                setReputacion(reputacion + 1);
              }}
            >
              <VscThumbsupFilled />
            </button>
            <button
              className="bg-red-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-red-700"
              onClick={() => {
                setReputacion(reputacion - 1);
              }}
            >
              <VscThumbsdownFilled />
            </button>
          </div>
          <div className="bg-slate-400 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-indigo-950 text-center">
              Información de contacto
            </h2>
            <div className="flex flex-wrap">
              <h1 className="font-bold text-xl align-items-center p-1 ">
                Emprendimiento:
              </h1>{" "}
              <h1 className=" text-base align-items-center p-1">
                {" "}
                GissBordados
              </h1>
            </div>
            <h1 className="p-5">
              @giss_bordados en ig : https://www.instagram.com/giss_bordados/
            </h1>
            <h1>~♡ Tienda de artículos de crochet y bordados personalizados</h1>
          </div>
        </div>

        <div className="p-5 flex flex-wrap rounded-xl space-x-6 space-y-6 items-center justify-center">
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gb1} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gb2} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gb3} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl ">
            <img className="max-w-md max-h-64" src={gb4} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl ">
            <img className="max-w-md max-h-64" src={gb5} alt="profilepic" />
          </div>
        </div>


      </div>
      <Footer></Footer>
    </div>
  );
}

export default PerfilAjeno;
