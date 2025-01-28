"use client";

import Image from "next/image";
import LogoImage from "@/src/assets/logo/Logoİmage.png";

function Logo() {
  return (
    <div>
      <Image src={LogoImage} alt="my website image" className="rounded-lg" />
    </div>
  );
}

export default Logo;
