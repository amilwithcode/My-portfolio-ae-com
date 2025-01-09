"use client";

import React, { useState } from "react";
import Image from "next/image";
import Enflag from "@/src/assets/images/flags/en.jpg";
import Azflag from "@/src/assets/images/flags/az.jpg";
import Trflag from "@/src/assets/images/flags/tr.jpg";
import Geflag from "@/src/assets/images/flags/de.jpg";



type LocaleSwitcherProps = {
    locale: string;
    setLocale ? : (locale: string) => void;
};

const locales = [
    { code: "en", name: "English", icon: Enflag.src },
    { code: "az", name: "Azərbaycan", icon: Azflag.src },
    { code: "tr", name: "Türkçe", icon: Trflag.src },
    { code: "de", name: "Deutsch", icon: Geflag.src },
];

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ locale, setLocale }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {/* Dil dəyişdirici düyməsi */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                }}
            >
                <Image
                    src={locales.find((l) => l.code === locale)?.icon || "@/src/assets/images/flags/az.jpg"}
                    alt={locale}
                    width={20}
                    height={20}
                />
                <span>{locales.find((l) => l.code === locale)?.name}</span>
            </button>

            {/* Açılan siyahı */}
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        border: "1px solid gray",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                    }}
                    className="locale-dropdown"
                >
                    {locales.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => {
                                // setLocale(l.code);
                                setIsOpen(false); // Siyahını bağlayır
                            }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "10px",
                                border: "none",
                                width: "100%",
                                textAlign: "left",
                                backgroundColor: locale === l.code ? "#e0f7fa" : "#fff",
                                cursor: "pointer",
                            }}
                        >
                            <Image
                                src={l.icon}
                                alt={l.name}
                                width={20}
                                height={20}
                            />
                            <span>{l.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocaleSwitcher;
