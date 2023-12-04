import React from 'react'
import { AiOutlineSmile } from "react-icons/ai";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import CardProduct from './CardProduct'


function FeedList() {
  const { product } = useContext(TaskContext);

  if (product.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        aún no hay tareas
        <AiOutlineSmile className="max-w-md mx-auto" />
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {product.map((product) => (
        <CardProduct key={product.id} product={product} /> //componente taskcard con prop task = se le pasa una tarea
      ))}
    </div>
  );
}

export default FeedList
