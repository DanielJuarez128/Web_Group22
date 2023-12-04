// import { useState, useContext } from "react";
// import { CardContext } from "../context/CardContext";


function CardProduct() {
  // const [nombre, setNombre] = useState("");
  // const [description, setDescription] = useState("");
  // const [precio, setPrecio] = useState("");
  // const [img, setImg] = useState("");
  // const [etiquetas, setEtiquetas] = useState("");
  // const [lista_deseos, setDeseos] = useState("");
  // const { createProduct } = useContext(CardContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   createProduct({
  //     nombre,
  //     description,
  //     precio,
  //     img,
  //     etiquetas,
  //     lista_deseos,
  //   });
  //   setNombre("");
  //   setDescription("");
  //   setPrecio("");
  //   setImg("");
  //   setEtiquetas("");
  //   setDeseos("");
  // };

  return (
    <div className="max-w-sm m-4 rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-slate-500">
      <img className="w-full" src={Logo} alt="foto" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">calculadora ti</div>
        <p className=" text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #estudios
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #nuevo
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #usado
        </span>
      </div>
    </div>
  );
}

export default CardProduct;
