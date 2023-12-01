import { VscDiffAdded } from "react-icons/vsc";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import React, { useState } from "react";
import moduleName from "module";
//import { validateForm } from "server/validators";

const NewPost = () => {
  const initialFormData = {
    nombre: "",
    descripcion: "",
    lista_deseos: "",
    precio: 0,
    etiqueta: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorConfirmation, setShowErrorConfirmation] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrorMessages([]);

    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      await newPost(formData);
      setShowConfirmation(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessages([error.message]);
      setShowErrorConfirmation(true);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const closeErrorConfirmation = () => {
    setShowErrorConfirmation(false);
  };
};

function AddProduct() {
  return (
    <div>
      <Header></Header>
      <div className=" p-10 rounded-xl authButtons flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-semibold text-white m-5 p-5 text-center">
          Nuevo artículo en venta
        </h1>
        <form className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center ">
         
          <div className="flex flex-wrap align-items-center p-3 ">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Nombre del artículo:{" "}
            </h3>{" "}
            <input className="bg-slate-300 p-3"></input>
          </div>


          <div className="flex flex-wrap align-items-center p-3 ">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Descripción:{" "}
            </h3>
            <textarea
              className="bg-slate-300 p-3"
              placeholder="Menciona el estado del producto y sus características"
            ></textarea>
          </div>


          <div className="flex flex-wrap align-items-center p-3">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Precio:{" "}
            </h3>
            <input className="bg-slate-300 p-3"></input>
          </div>


          <div className="flex flex-wrap align-items-center p-3">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Imagen referencia:{" "}
            </h3>
            <input
              className="bg-slate-300 p-3"
              placeholder="Adjunta una imagen"
            ></input>
            <button className="bg-indigo-500 text-white rounded-lg p-3 m-2 self-center justify-center items-center hover:bg-indigo-600">
              {" "}
              <VscDiffAdded />{" "}
            </button>
          </div>


          <div className="flex flex-wrap align-items-center p-3">
            <h3 className="text-lg font-bold text-white text-center p-3">
              Etiquetas:{" "}
            </h3>
            <input className="bg-slate-300 p-3"></input>
            <button className="bg-indigo-500 text-white rounded-lg p-3 m-2 self-center justify-center items-center hover:bg-indigo-600">
              {" "}
              <VscDiffAdded />{" "}
            </button>
          </div>

          <div className="p-3 ">
            <h3 className="text-lg font-bold text-white text-center m-3">
              De aceptar trueque, haría intercambio por:{" "}
            </h3>
            <textarea
              className="bg-slate-300 p-3 w-full"
              placeholder="Ejem: acepto libro 'Física de Sears y Zemansky vol 1' a cambio"
            ></textarea>
          </div>

          <div className="flex flex-wrap align-items-center">
            <button className="bg-lime-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-lime-700">
              Publicar
            </button>
            <button className="bg-red-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-red-700">
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AddProduct;
