"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  img: string;
  alt: string;
  color: string;
  audioSrc: string; // Nueva prop para el archivo de audio
};

export default function Boton({ img, alt, color, audioSrc }: Props) {
  const [audio] = useState(new Audio(audioSrc));

  useEffect(() => {
    // Esta función se ejecuta después de que el componente se monta en el navegador
    // Puedes inicializar y configurar el audio aquí
    return () => {
      // Esta función se ejecuta cuando el componente se desmonta
      // Puedes realizar la limpieza necesaria, como pausar el audio, aquí
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleButtonClick = () => {
    audio.play();
  };

  return (
    <button
      className={`w-[118px] h-[118px] flex justify-center items-center rounded-xl hover:scale-110 ${color}`}
      onClick={handleButtonClick}
    >
      <div className="w-[100px] h-[100px] bg-white rounded-xl flex justify-center items-center">
        {/* Tu contenido del botón */}
        <Image src={img} alt={alt} width={80} height={80} />
      </div>
    </button>
  );
}
