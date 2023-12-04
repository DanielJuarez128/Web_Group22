import React from "react";

function CardList() {
  return (
    <div>
      <div className="bg-slate-800 p-10 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>

      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
      <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons flex flex-col items-center justify-center "></div>
    </div>
  );
}

export default CardList;

/*import CardProduct from "./CardProduct";

export const CardList = ({ Articulos }) => {
  return (
    <div>
      <ul
        role="list"
        className="grid justify-around gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {Articulos.map((Articulos, index) => {
          return (
            <li key={Articulos._id} role="listitem" className="mt-4">
              <CardProduct {...Articulos} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}; */
