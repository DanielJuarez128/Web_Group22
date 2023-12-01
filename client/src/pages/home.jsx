import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AiOutlineSmile } from "react-icons/ai";

import React from "react";
import { useNavigate } from "react-router";

function Feed() {
  const navigate = useNavigate();

  function handleEditProfile() {
    navigate("/modificarPerfil");
  }

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-2xl font-bold text-white p-10 text-center">
          Bienvenid@ de nuevo <AiOutlineSmile className="max-w-md mx-auto" />
        </h1>
        <button className="bg-amber-400-" onClick={handleEditProfile}>BOTON</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Feed;
