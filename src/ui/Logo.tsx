"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo/Logoİmage.png";

function Logo() {
  return (
    <div className="dark:bg-white rounded-xl">
      <Image src={LogoImage} alt="my website image" className="rounded-lg" />
    </div>
  );
}

export default Logo;
