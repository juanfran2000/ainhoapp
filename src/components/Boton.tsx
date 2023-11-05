"use clients";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  img: string;
  alt: string;
  color: string;
  audioSrc: string;
};

export default function Boton({ img, alt, color, audioSrc }: Props) {
  const [audio, setAudio] = useState<Audio | undefined>(undefined);

  useEffect(() => {
    if (process.browser) {
      const audioElement = new Audio(audioSrc);
      setAudio(audioElement);

      return () => {
        audioElement.pause();
        audioElement.currentTime = 0;
      };
    }
  }, [audioSrc]);

  const handleButtonClick = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <button
      className={`w-[118px] h-[118px] flex justify-center items-center rounded-xl hover:scale-110 ${color}`}
      onClick={handleButtonClick}
    >
      <div className="w-[100px] h-[100px] bg-white rounded-xl flex justify-center items-center">
        <Image src={img} alt={alt} width={80} height={80} />
      </div>
    </button>
  );
}
