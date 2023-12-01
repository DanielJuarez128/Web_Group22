import React from "react";
import { Header } from "../components/Header";
import { CardList } from "../components/CardList";
import { Footer } from "../components/Footer";

function Feed() {
  return (
    <div>
      <Header></Header>
      <div className="bg-slate-800 ">
        <CardList></CardList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Feed;