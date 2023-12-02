import { VscThumbsupFilled } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import gutyLogo from "../assets/img/gutyLogo.jpg";
import gu1 from "../assets/img/gu1.jpg";
import gu2 from "../assets/img/gu2.jpg";
import gu3 from "../assets/img/gu3.jpg";
import gu4 from "../assets/img/gu4.jpg";
import gu5 from "../assets/img/gu5.jpg";

import React from "react";

import { useState, useEffect } from "react";

//rounded-full

function PerfilGuti() {
  const [reputacion, setReputacion] = useState(10000);

  return (
    <div>
      <Header></Header>
      <h1 className="text-2xl font-bold text-white p-10 text-center">
        Emprendimiento
      </h1>
      <div className=" p-5 authButtons flex flex-row space-x-6 space-y-6 items-center justify-start m-4">
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
          <h3 className="text-base font-bold text-white text-center">
            Daniel Isaias Juaez Gutierrez
          </h3>
          <div className="rounded-md max-w-md max-h-64 m-3">
            <img
              className="max-w-md max-h-64"
              src={gutyLogo}
              alt="profilepic"
            />
          </div>

          <h3 className="text-base font-bold text-white text-center">
            00012922@uca.edu.sv
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
                Guty Dseños Gráficos
              </h1>
            </div>
            <h1 className="p-5">
              @guty_disennio en ig : https://www.instagram.com/guty_disennio/
            </h1>
            <h1>🇸🇻 Diseño Gráfico Publicitario.</h1>
            <h1>🎨 Cotizaciones a WhatsApp, Telegram o correo electrónico</h1>
            <h1>📧 dijguty.disenniografico@gmail.com 📨</h1>
            <h1>acortar.link/GutyDisennio</h1>
          </div>
        </div>

        <div className=" p-5 authButtons flex flex-wrap rounded-xl space-x-6 space-y-6 items-center justify-center">
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gu1} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gu2} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl">
            <img className="max-w-md max-h-64" src={gu3} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl ">
            <img className="max-w-md max-h-64" src={gu4} alt="profilepic" />
          </div>
          <div className="bg-slate-800 p-10 rounded-xl ">
            <img className="max-w-md max-h-64" src={gu5} alt="profilepic" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PerfilGuti;
