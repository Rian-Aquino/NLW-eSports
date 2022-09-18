import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";

import logo from "./assets/logo.svg";
import img1 from "./assets/img1.jpg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          {" "}
          duo{" "}
        </span>
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={img1} />

          <div className="w-full absolute bottom-0 bg-shade-in-y p-4 pt-16">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-medium block">8 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634] self-stretch px-8 py-6 relative rounded-lg overflow-hidden mt-8 flex justify-between">
        <div className="bg-nlw-gradient h-1 w-full absolute top-0 left-0"></div>

        <div>
          <h2 className="text-white font-black text-2xl">
            Não encontrou seu duo?
          </h2>
          <h4 className="text-zinc-400 font-medium">
            Publique um anúncio para encontrar novos players!
          </h4>
        </div>

        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  );
}

export default App;
