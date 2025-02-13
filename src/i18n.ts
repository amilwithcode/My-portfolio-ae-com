import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
// import { locales } from './config';
import { Pathnames } from "next-intl/routing"



export const locales = ["az", "en", "tr", "de"];

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/about": "/about",
    "/projects": "/projects",
    "/contact": "/contact",
    "/login": "/login",
    "/register": "/register"
}

export const localePrefix = "always";



export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale )) notFound();


    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    };
})

