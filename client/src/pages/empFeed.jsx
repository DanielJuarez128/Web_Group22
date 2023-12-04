import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import gissLogo from "../assets/img/gissLogo.jpg";
import gutyLogo from "../assets/img/gutyLogo.jpg";

import React from "react";
import { useNavigate } from "react-router";

function FeedEmprendedores() {
  const navigate = useNavigate();

  function handleGiss() {
    navigate("/verPerfil");
  }

  function handleGuti() {
    navigate("/VerPerfil2");
  }

  return (
    <div>
      <Header></Header>
      <div>
        <h1>EMPRENDEDORES</h1>
        <div className=" p-5 authButtons rounded-xl space-x-6 space-y-6 items-center justify-center flex flex-wrap">
          <div className=" p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
            <h1 className="text-2xl font-bold text-white p-10 text-center">
              Giss Bordados
            </h1>
            <img className="max-w-md max-h-64 m-3" src={gissLogo} alt="profilepic" />
            <button
              className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-indigo-600"
              onClick={handleGiss}
            >
              Ver
            </button>
          </div>

          <div className="p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
            <h1 className="text-2xl font-bold text-white p-10 text-center">
              Guty Diseños Gráficos
            </h1>
            
            <img className="max-w-md max-h-64 m-3" src={gutyLogo} alt="profilepic" />
            <button
              className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-indigo-600"
              onClick={handleGuti}
            >
              Ver
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FeedEmprendedores;
