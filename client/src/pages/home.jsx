import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AiOutlineSmile } from "react-icons/ai";

import searsYserway from '../assets/img/searsYserway.svg'

import React from "react";

function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-2xl font-bold text-white p-10 text-center">
          Bienvenid@ de nuevo <AiOutlineSmile className="max-w-md mx-auto" />
        </h1>

        <div className="p-5 authButtons flex flex-wrap space-x-6 space-y-6 items-center justify-center rounded-sm">
          <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
            
            <img className="w-full" src={searsYserway} alt="foto" />

            <div className="px-6 py-4">


              <div className="font-bold text-xl mb-2">Libro de Física</div>

              <p className=" text-white text-base p-2">
                Sears y Searway Vol2, perfectas condiciones.
              </p>

              <div className="flex flex-wrap">
                <h3 className="font-bold text-xl align-items-center p-1 ">
                  Precio: 
                </h3>{" "}
                <h3 className= "text-white text-base align-items-center p-1"> $50</h3>
              </div>

              <div className="flex flex-wrap">
                <h3 className="font-bold text-xl align-items-center p-1">
                  Lista de deseos: 
                </h3>{" "}
                <h3 className= "text-white text-base align-items-center p-1"> - </h3>
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
      <Footer></Footer>
    </div>
  );
}

export default Home;
