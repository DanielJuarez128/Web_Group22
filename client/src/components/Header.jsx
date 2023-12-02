import Logo from "../assets/Logo.svg";
import Logobuho from "../assets/Logobuho.svg";
import { AiOutlineMenu } from "react-icons/ai";
import {AiOutlineClose} from 'react-icons/ai'

import { useState } from "react";
import { useNavigate } from "react-router";
import { CgSearch } from "react-icons/cg";
import { words } from "../data/filter";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [activeSearch, setActiveSearch] = useState([])

  const handleSearch = (e) => {
    if(e.target.value == ''){
      setActiveSearch([])
      return false
    }
    setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,8))
  }

  const navigate = useNavigate();

  function handlePerfil() {
    navigate("/perfil");
  }

  function handleFeed() {
    navigate("/home");
  }

  function handleNewArticle() {
    navigate("/nuevaVenta");
  }

  function handleEmprendedores() {
    navigate("/Emprendimientos");
  }

  function handleLogOut() {
    navigate("/");
  }



  return (
    <div className=" mx-auto">
      <header className="flex flex-shrink justify-between flex-auto h-24 bg-slate-900">
        <img
          className="w-16 md:w-32 lg:w-80 hidden md:block"
          src={Logo}
          alt="Logo"
        />
        <img className="w-24 md:hidden lg:hidden" src={Logobuho} alt="Logo" />

        {/*navbar*/}
        <div className="flex justify-between items-center h-24 text-white bg-slate-900">
          <ul className=" hidden md:flex ">
            <li className=" p-10 text-2xl" onClick={handleFeed}>
              {" "}
              <a href="#">INICIO</a>{" "}
            </li>

            <li className=" p-10 text-2xl" onClick={handleFeed}>
              {" "}
              <a href="#">ARTICULOS</a>{" "}
            </li>

            <li className=" p-10 text-2xl" onClick={handleEmprendedores}>
              {" "}
              <a href="#">EMPRENDIMIENTOS</a>{" "}
            </li>
          </ul>

          {/* search bar*/}
          <form className="flex-shrink w-[540px] relative  place-self-center ">
            <div className="relative">
              <input
                type="search"
                placeholder="type here"
                className=" w-96 p-4 rounded-full bg-slate-800 " onChange={(e) => handleSearch(e)}
              />
              <button className=" flex absolute right-44 top-1/2 -translate-y-1/2 p-3 bg-slate-500 rounded-full">
                <CgSearch />
              </button>
            </div>


          {
            activeSearch.length > 0 && (
              <div
              className="absolute top-20 p-4 bg-slate-800 text-white w-96
            rounded-xl left-48 -translate-x-1/2 flex flex-col gap-2">

              {
                activeSearch.map(s =>(
                  // eslint-disable-next-line react/jsx-key
                  <span>{s}</span>
                ))
              }
              
            </div>
            )
          }
          </form>

          {/*movile navbar */}
          <div
            className="block md:hidden relative right-24 "
            onClick={handleNav}
          >
            {!nav ? (
              <AiOutlineMenu size={1} />
            ) : (
              <AiOutlineMenu size={30} color="white" />
            )}
          </div>

          <div
            className={
              !nav
                ? "fixed right-0 top-0 w-[40%] h-full border-r border-r-black bg-slate-600 md:hidden ease-out duration-500"
                : "fixed right-[100%]"
            }
          >
            <div
              className="absolute right-0 rounded-lg bg-red-600 md:hidden"
              onClick={handleNav}
            >
              {!nav ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={20} color="white" />
              )}
            </div>
            <ul className="uppercase p-4 ">
              <li className=" p-4">
                {" "}
                <a href="#" onClick={handleFeed}>
                  INICIO
                </a>{" "}
              </li>

              <li className=" p-4 ">
                {" "}
                <a href="#" onClick={handlePerfil}>
                  MI PERFIL
                </a>{" "}
              </li>

              <li className=" p-4">
                {" "}
                <a href="#">ARTICULOS</a>{" "}
              </li>

              <li className=" p-4" onClick={handleNewArticle}>
                {" "}
                <a href="#">NUEVA PUBLICACION</a>{" "}
              </li>

              <li className=" p-4" onClick={handleEmprendedores}>
                {" "}
                <a href="#">EMPRENDIMIENTOS</a>{" "}
              </li>

              <li className=" p-4 ">
                {" "}
                <a href="#" onClick={handleLogOut}>
                  CERRAR SESIÓN
                </a>{" "}
              </li>
            </ul>
          </div>

          {/*profile pic button*/}
          <div className=" relative hidden md:block">
            <button
              className="relative right-8 top-1/2-translate-y-1/2 p-6 bg-black rounded-full"
              onClick={handlePerfil}
            ></button>
          </div>
        </div>
      </header>
    </div>
  );
};
