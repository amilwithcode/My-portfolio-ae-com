"use client";

import React, { useState } from "react";
import Image from "next/image";
import Enflag from "@/src/assets/images/flags/en.jpg";
import Azflag from "@/src/assets/images/flags/az.jpg";
import Trflag from "@/src/assets/images/flags/tr.jpg";
import Geflag from "@/src/assets/images/flags/de.jpg";

import { useTransition } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/src/navigation";
// import { useTranslations } from "next-intl";


type LocaleSwitcherProps = {
  locale: string;
  setLocale?: (locale: string) => void;
};

export const locales = [
  { code: "en", name: "English", icon: Enflag.src },
  { code: "az", name: "Azərbaycan", icon: Azflag.src },
  { code: "tr", name: "Türkiye", icon: Trflag.src },
  { code: "de", name: "Germany", icon: Geflag.src },
];

function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams?.entries());
  // const t = useTranslations("Languages")
  const [isPending, startTransition] = useTransition();

  function onSelectChange(lang: string) {
    startTransition(() => {
      // @ts-expect-error hti
      router.replace({ pathname, params, query }, { locale: lang });
    });
    setIsOpen(false);
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Dil dəyişdirici düyməsi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-5  rounded-8  dark:bg-black dark:text-white cursor-pointer"
        disabled={isPending}
      >
        <Image
          src={
            locales.find((l) => l.code === locale)?.icon ||
            "@/src/assets/images/flags/az.jpg"
          }
          alt={locale}
          width={20}
          height={20}
        />
        <span className="font-permanent">{locales.find((l) => l.code === locale)?.name}</span>
      </button>

      {/* Açılan siyahı */}
      {isOpen && (
        <div className="absolute top-12 left-0 border  bg-slate-50 border-gray-300 rounded-8 dark:bg-black dark:text-white shadow-md z-[1000] p-3">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelectChange(l.code)}
              className="flex items-center gap-3 p-5 text-left border-none  dark:bg-black dark:text-white cursor-pointer "
            >
              <Image
                src={l.icon} alt={l.name}
                width={20}
                height={20}
              />
              <span className="font-permanent">{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocaleSwitcher;
