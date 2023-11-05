"use client";
import Boton from "@/components/Boton";
import { useState } from "react";
export default function Home() {
  const [audio] = useState(new Audio("/plim.mp3"));

  const sonidoPlim = () => {
    audio.play();
  };
  return (
    <div className=" flex items-center justify-center mb-10">
      <div className="flex flex-col items-center justify-center py-10 bg-zinc-200 w-11/12 rounded-xl">
        <h3
          className="text-2xl bg-white py-2 px-6 rounded-full text-blue-500 transition-all hover:scale-110"
          onClick={sonidoPlim}
        >
          Presiona & Escucha
        </h3>
        <div className="px-10 mt-10 flex flex-wrap gap-x-4 gap-y-4 justify-center">
          <Boton
            img="/cereal.png"
            alt="foto cereal"
            color="bg-green-500"
            audioSrc="/cereal.mp3"
          />
          <Boton
            img="/galletas.png"
            alt="foto galletas"
            color="bg-pink-500"
            audioSrc="/galletas.mp3"
          />
          <Boton
            img="/alfajor.png"
            alt="foto alfajor"
            color="bg-blue-500"
            audioSrc="/alfajor.mp3"
          />
          <Boton
            img="/galletas-fresa.png"
            alt="foto galletas fresa"
            color="bg-red-500"
            audioSrc="/fresa.mp3"
          />
          <Boton
            img="/monopatin.png"
            alt="foto monopatin"
            color="bg-pink-300"
            audioSrc="/motopatin.mp3"
          />
          <Boton
            img="/jugo.png"
            alt="foto jugo"
            color="bg-yellow-300"
            audioSrc="/jugo.mp3"
          />
          <Boton
            img="/leche.png"
            alt="foto leche"
            color="bg-orange-500"
            audioSrc="/almendra.mp3"
          />
          <Boton
            img="/queso.png"
            alt="foto queso"
            color="bg-purple-400"
            audioSrc="/kiros.mp3"
          />
          <Boton
            img="/yogurt.png"
            alt="foto yogurt"
            color="bg-red-300"
            audioSrc="/yogurt.mp3"
          />
          <Boton
            img="/quinoa.png"
            alt="foto quinoa"
            color="bg-yellow-400"
            audioSrc="/quinoa.mp3"
          />
        </div>
      </div>
    </div>
  );
}
