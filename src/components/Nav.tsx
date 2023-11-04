"use client";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="h-32 flex justify-center items-center">
      <a href="#">
        <Image
          src="./logo-ainhoa.svg"
          alt="logo ainhoa"
          width={150}
          height={150}
        ></Image>
      </a>
    </nav>
  );
}
