import { createContext, useState, useEffect } from "react";
import { product as data, product } from "../data/product";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [product, setProduct] = useState([]);

  function createProduct(product) {
    setProduct([
      ...product,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteProduct(productId) {
    setProduct(product.filter((product) => product.id !== productId)); //se compara al id de la tarea con el id de la seleccionada
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <CardContext.Provider
      value={{
        product,
        deleteProduct,
        createProduct,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
}
